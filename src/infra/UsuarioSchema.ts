export type UsuarioSchema = {
    id: number,
    nome: string,
    ativo: boolean,
    saldo?: bigint
}