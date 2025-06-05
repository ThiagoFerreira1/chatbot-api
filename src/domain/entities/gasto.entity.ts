export type Gasto = {
  id: number;
  usuarioID: number;
  descricao?: string | null;
  valor: number;
  data: Date;
};

export type GastoProps = Omit<Gasto, 'id'>;

export class gastoEntity {
  public readonly _id: number;

  constructor(
    public readonly props: GastoProps,
    id: number,
  ) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
