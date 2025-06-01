export interface IRepository<T, ID> {
  create(entity: T): Promise<T | null>;
  findById(id: ID): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: ID, entity: Partial<T>): Promise<T | null>;
  delete(id: ID): Promise<void>;
}