import { Router, Request, Response } from 'express';
import UsuarioRepositorio from '../infra/UsuarioRepositorio';
import { CriarUsuarioDTO, Usuario, ViewUsuarioDTO } from '../usuarios';
import { UsuarioSchema } from '../infra/UsuarioSchema';

class UsuarioController{
    private readonly usuarioRepositorio: UsuarioRepositorio;
    public router: Router = Router();

    constructor(usuarioRepositorio: UsuarioRepositorio){
        this.usuarioRepositorio = usuarioRepositorio;
        this.routes();   
    }

    public routes(){
        this.router.get('/', this.buscarUsuarios.bind(this));
        this.router.get('/:id', this.buscarUsuariosPorId.bind(this));
        this.router.post('/', this.criarUsuario.bind(this));
        this.router.post('/:id', this.deletarUsuarioPorId.bind(this));
    }

    public buscarUsuarios(req: Request, res: Response) {
        const usuarios: UsuarioSchema[] = this.usuarioRepositorio.getUsuarios();
        const usuariosDto: ViewUsuarioDTO[] = usuarios.map((usuario) => ({
            nome: usuario.nome,
            ativo: usuario.ativo,
            NumeroDoc: usuario.KAMV,
        } as ViewUsuarioDTO));
        res.json(usuariosDto);
    }

    public buscarUsuariosPorId (req: Request, res: Response){
        const id = req.params.id;
        if (!id) {
            res.json('Id não enviado');
            return;
        }
        
        const usuario = this.usuarioRepositorio.getUsuarioPorId(+id);
        
        if (usuario) {
            const usuarioDto: ViewUsuarioDTO = {
                nome: usuario.nome,
                ativo: usuario.ativo,
                numeroDoc: usuario.KAMV,
            };
            
            res.json(usuarioDto);
            return;
        }
        res.json('Usuário não encontrado');
    }


    public criarUsuario (req: Request, res: Response){
        const dadosUsuario: CriarUsuarioDTO = req.body;
        let usuarios = this.usuarioRepositorio.getUsuarios();
        const idsExistentes = usuarios.map(usuario => usuario.id);
        const novoId = Math.max(...idsExistentes) + 1;
        const usuario = new Usuario(
            novoId ?? '0',
            dadosUsuario.nome,
            dadosUsuario.ativo,
            dadosUsuario.saldo
        );
        this.usuarioRepositorio.criarUsuario(usuario);
        usuarios = this.usuarioRepositorio.getUsuarios();
        res.json(usuarios);
    }


    public deletarUsuarioPorId (req: Request, res: Response){
        const id = req.params.id;
        if (!id) {
            res.json('Id não enviado!');
            return;
        }
        const sucesso = this.usuarioRepositorio.deletarUsuario(+id);
        if (sucesso) {
            res.json('Usuário excluído com sucesso');
            return;
        }
        res.json('Usuário não encontrado');
    }
}
export default UsuarioController;