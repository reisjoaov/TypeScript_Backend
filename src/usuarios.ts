export const usuarios: UsuarioSchema[] = [
    {
       id: 123,
       nome: 'Renan',
       ativo: false,
       saldo: 124398498578n
    },
    { 
       id: 124,
       nome: 'Jessica',
       ativo: true
    },
]

export type UsuarioSchema = {
    id: number,
    nome: string,
    ativo: boolean,
    saldo?: bigint
}

export class Usuario {
    id: number;
    nome: string;
    ativo: boolean = true;
    saldo?: bigint = 12n;

    constructor(nome: string, ativo: boolean, saldo?: bigint) {
        this.id = Math.round (Math.random()*100);
        this.nome = nome;
        this.ativo = ativo;
        this.saldo = saldo;
    }

    getNome() {
        return this.nome;
    }
}