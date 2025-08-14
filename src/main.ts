import UsuarioRepositorio from "./infra/UsuarioRepositorio";
import { Usuario } from "./usuarios";
import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.use(express.json());

//GET rota
app.get('/', (req: Request, res: Response) => {
    res.json('Rota estabelecida');
});

const usuarioRepositorio = new UsuarioRepositorio();

//GET usuarios
app.get('/usuarios', (req: Request, res: Response) => {
    const usuarios = usuarioRepositorio.getUsuarios();
    res.json(usuarios);
});

//GET usuario por Id
app.get('/usuarios/:id/', (req: Request, res: Response) => {
    const id = req.params.id;
    if(id === undefined){
        res.json('Usuário não encontrado');
        return;
    }
    console.log(id);
    const usuarios = usuarioRepositorio.getUsuarioPorId(+id);
    res.json(usuarios);
});


//POST
app.post('/usuarios',  (req: Request, res: Response) => {
    const dadosUsuario: Usuario = req.body;
    usuarioRepositorio.criarUsuario(dadosUsuario);
    const usuarios = usuarioRepositorio.getUsuarios();
    res.json(usuarios);
});



app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost: ${port}`)
});

/*
const usuarioRepositorio = new UsuarioRepositorio;

const usuario = new Usuario ("silva", true, 1241n);

console.log(
    usuarioRepositorio.criarUsuario(usuario)
);*/