import UsuarioRepositorio from "./infra/UsuarioRepositorio";
import { Usuario } from "./usuarios";
import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send ('Rota estabelecida')
});

//app.post

app.listen(port, () => {
    console.info(`Servidor rodando na porta: http://localhost: ${port}`)
});

/*
const usuarioRepositorio = new UsuarioRepositorio;

const usuario = new Usuario ("silva", true, 1241n);

console.log(
    usuarioRepositorio.criarUsuario(usuario)
);*/