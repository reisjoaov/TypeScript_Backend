//CRUD

//CRUD - CREATE
function criarUsuario(usuario: Usuario): UsuarioSchema[]{
    usuarios.push({...usuario});
    return usuarios;
}
const usuario = new Usuario('Paulo', true, 1230n);
console.log(criarUsuario(usuario));


//CRUD - READ
import {Usuario, usuarios, UsuarioSchema}  from './usuarios';

function mostraEmTela(): void {
    console.log("exibindo em tela");
}

// hoisting
function retornaUsuarios () {
    return usuarios;
}
function retornaUsuarioPorId (id: number): UsuarioSchema | undefined {
    console.log('tipo do id =', typeof id);
    return usuarios.find(user => user.id === id);
}


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