export class Usuario {
    id: number;
    nome: string;
    ativo: boolean = true;
    saldo?: bigint = 12n;
    numeroDoc?: number;
    senha?: string;

    constructor(id: number, nome: string, ativo: boolean, saldo?: bigint, numeroDoc?: number) {
        //this.id = Math.round (Math.random()*100);
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this.saldo = saldo;
        this.numeroDoc = numeroDoc;
        this.senha = "minha senha";
    }
}

//DTO - Data Transfer Object
export type CriarUsuarioDTO = {
    nome: string;
    ativo: boolean;
    saldo?: bigint;
    numeroDoc?: number;
    senha?: string;
}

export type ViewUsuarioDTO = {
    nome: string;
    ativo: boolean;
    numeroDoc?: number;
}