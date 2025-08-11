import UsuarioRepositorio from "./infra/UsuarioRepositorio";
import { Usuario } from "./usuarios";

const usuarioRepositorio = new UsuarioRepositorio;

const usuario = new Usuario ("silva", true, 1241n);

console.log(
    usuarioRepositorio.criarUsuario(usuario)
);