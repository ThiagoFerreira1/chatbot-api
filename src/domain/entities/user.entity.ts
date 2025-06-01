export class User {
  public readonly id?: string;
  public nome: string;
  public telefone: string;
  public email?: string;
  public dataCriacao: Date;

  constructor(
    nome: string,
    telefone: string,
    email?: string,
    dataCriacao?: Date,
    id?: string,
  ) {
    this.id = id,
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.dataCriacao = dataCriacao ?? new Date();
  }
}
