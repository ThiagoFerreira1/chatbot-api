import * as bcrypt from 'bcryptjs';

export type Usuario = {
  id: number;
  nome: string;
  telefone?: string | null;
  email: string;
  senha: string;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
};

export type UsuarioProps = Omit<Usuario, 'id'>;

export class UsuarioEntity {
  public readonly _id: number;

  constructor(
    private readonly props: UsuarioProps,
    id: number,
  ) {
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

  get email(): string {
    return this.props.email;
  }

  get senha(): string {
    return this.props.senha;
  }

  get dataCriacao(): Date | undefined {
    return this.props.dataCriacao;
  }

  get dataAtualizacao(): Date | undefined {
    return this.props.dataAtualizacao;
  }

  public async comparePassword(senha: string): Promise<boolean> {
    console.log('Comparando senha:', senha, 'com', this.senha);
    return bcrypt.compare(senha, this.senha);
  }
}
