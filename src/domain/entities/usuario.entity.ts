export type Usuario = {
  id: number;
  nome: string;
  telefone?: string | null;
  email?: string | null;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
};

export type UsuarioProps = Omit<Usuario, 'id'>;

export class UsuarioEntity {
  public readonly _id: number;

  constructor(private readonly props: UsuarioProps, id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  get nome(): string {
    return this.props.nome;
  }

  get telefone(): string | null | undefined {
    return this.props.telefone;
  }

  get email(): string | null | undefined {
    return this.props.email;
  }

  get dataCriacao(): Date | undefined {
    return this.props.dataCriacao;
  }

  get dataAtualizacao(): Date | undefined {
    return this.props.dataAtualizacao;
  }
}