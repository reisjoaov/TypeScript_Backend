import { Router, Request, Response } from 'express';
import UsuarioRepositorio from '../infra/UsuarioRepositorio';
import { CriarUsuarioDTO, Usuario, ViewUsuarioDTO } from '../usuarios';

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
    }

    public buscarUsuarios (req: Request, res: Response){
        const usuarios = this.usuarioRepositorio.getUsuarios();
        res.json(usuarios);
    }

    public buscarUsuariosPorId (req: Request, res: Response){
        const id = req.params.id;
        if (!id) {
            res.json('Usuário não encontrado');
            return;
        }
        
        const usuario = this.usuarioRepositorio.getUsuarioPorId(+id);
        
        if (usuario){
            const usuarioDto: ViewUsuarioDTO = {
                nome: usuario.nome,
                ativo: usuario.ativo,
                numeroDoc: usuario.numeroDoc,
            };
            res.json(usuarioDto);
        }

        res.json('Usuario não encontrado');
    }

    public criarUsuario (req: Request, res: Response){
        const dadosUsuario: CriarUsuarioDTO = req.body;

        const usuario = new Usuario(
            dadosUsuario.nome,
            dadosUsuario.ativo,
            dadosUsuario.saldo
        );

        this.usuarioRepositorio.criarUsuario(usuario);
        const usuarios = this.usuarioRepositorio.getUsuarios();
        res.json(usuarios);
    }
}

export default UsuarioController;