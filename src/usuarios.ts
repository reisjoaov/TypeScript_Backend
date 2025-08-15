export class Usuario {
    id: number;
    nome: string;
    ativo: boolean = true;
    saldo?: bigint = 12n;
    numeroDoc?: number;
    senha?: string;
    sobrenome?: string;

    constructor(id: number, nome: string, ativo: boolean, saldo?: bigint, sobrenome?: string) {
        //this.id = Math.round (Math.random()*100);
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this.saldo = saldo;
        this.senha = "minha senha";
        this.sobrenome = sobrenome;
    }
}

//DRY - Don't Repeat Yourself
export class Professor extends Usuario {
  private tipo: string = 'Professor';
  private supervisor?: string;

  constructor(
    id: number,
    nome: string,
    ativo: boolean,
    saldo?: bigint,
    sobrenome?: string,
    supervisor?: string,
  ) {
    super(id, nome, ativo, saldo, sobrenome);
    this.supervisor = supervisor;
  }

  organizarAulas(): void {
    console.log('Ministrar aulas');
  }
}

export class Diretor extends Usuario {
  private tipo: string = 'Diretor';

  organizarAulas() {
    console.log('Escolhe a emenda do curso');
  }
}

//DTO - Data Transfer Object
export type CriarUsuarioDTO = Omit<Usuario, 'id'>

export type atualizarUsuarioDTO = Partial<CriarUsuarioDTO>

export type ViewUsuarioDTO = Omit<CriarUsuarioDTO, 'senha'>