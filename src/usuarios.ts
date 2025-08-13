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
}