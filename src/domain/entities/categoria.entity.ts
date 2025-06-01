export class Categoria {
  public readonly id: string;
  public nome: string;
  public descricao?: string;

  constructor(
    nome: string,
    descricao?: string,
    usuarioId?: string,
    id?: string,
  ) {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome da categoria é obrigatório');
    }

    this.id = id ?? this.gerarId();
    this.nome = nome;
    this.descricao = descricao;
  }

  private gerarId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}