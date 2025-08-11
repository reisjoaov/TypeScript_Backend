//CRUD

import { Usuario, usuarios, UsuarioSchema } from "../../usuarios";

//CRUD - CREATE
function criarUsuario(usuario: Usuario): UsuarioSchema[]{
    usuarios.push({...usuario});
    return usuarios;
}

//CRUD - READ
// hoisting
function retornaUsuarios () {
    return usuarios;
}
//console.log(retornaUsuarios());

function retornaUsuarioPorId (id: number): UsuarioSchema | undefined {
    console.log('tipo do id =', typeof id);
    return usuarios.find(user => user.id === id);
}
//console.log(retornaUsuarioPorId(124));


//CRUD - UPDATE
function atualizarUsuario (id: number, dadosAtualizacao: UsuarioSchema): UsuarioSchema | undefined {
    const indiceUsuario = usuarios.findIndex(user => user.id ===id);

    if (indiceUsuario === -1){
        console.log(`Usuário com ID ${id} não encontrado`);
        return;
    }

    //Atualiza apenas os campos fornecidos
    usuarios[indiceUsuario] = {
        ...usuarios[indiceUsuario],
        ...dadosAtualizacao
    };

    return usuarios[indiceUsuario];
}


//CRUD - DELETE
function deletaUsuario(id: number): UsuarioSchema | undefined{
    const indiceUsuario = usuarios.findIndex(user => user.id === id);

    if (indiceUsuario === -1){
        console.log (`Usuário com ID ${id} não encontrado`);
    }

    //Remove o usuário do Array e retorno o usuário removido
    const usuarioRemovido = usuarios.splice(indiceUsuario, 1)[0];
    return usuarioRemovido;
}