//CRUD
import UsuarioRepositorio from "../../infra/UsuarioRepositorio";
import { UsuarioSchema } from "../../infra/UsuarioSchema";
import { Usuario } from "../../usuarios";

const usuarioRepositorio = new UsuarioRepositorio();

//CRUD - READ
//hoisting
function retornaUsuarios (){
    return usuarioRepositorio.getUsuarios();
}

function retornaUsuarioPorId (id: number): UsuarioSchema | undefined {
    //console.log('tipo do id =', typeof id);
    return usuarioRepositorio.getUsuarioPorId(id);
}

//CRUD - CREATE
function criarUsuario(usuario: Usuario): UsuarioSchema[] {
    const usuarios = usuarioRepositorio.criarUsuario(usuario);
    return usuarios;
}

//CRUD - UPDATE
function atualizarUsuario (id: number, dadosAtualizacao: UsuarioSchema): UsuarioSchema | undefined {
    const usuario = usuarioRepositorio.getUsuarioPorId(id);

    if (usuario){
        console.log(`Usuário com ID ${id} não encontrado`);
        return;
    }

    throw new Error ('Not implemented');
    //Atualiza apenas os campos fornecidos
    //usuarios[indiceUsuario] = {
    //    ...usuarios[indiceUsuario],
    //    ...dadosAtualizacao
    //};
    //return usuarios[indiceUsuario];
}

//CRUD - DELETE
/*
function deletaUsuario(id: number): UsuarioSchema | undefined{
    const usuario = usuarioRepositorio.getUsuarioPorId(id);

    if (usuario){
        console.log (`Usuário com ID ${id} não encontrado`);
    }

    //Remove o usuário do Array e retorno o usuário removido
    const usuarioRemovido = usuarios.splice(usuario, 1)[0];
    return usuarioRemovido;
}
*/