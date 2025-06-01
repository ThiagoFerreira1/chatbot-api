export class Gasto {
  public readonly id?: string;
  public readonly usuarioId: string;
  public descricao?: string;
  public valor: number;
  public data: Date;

  constructor(
    usuarioId: string,
    descricao: string | null,
    valor: number,
    data?: Date,
    id?: string,
  ) {
    this.id = id,
    this.usuarioId = usuarioId;
    this.descricao = descricao ?? undefined;
    this.valor = valor;
    this.data = data ?? new Date();
  }
}