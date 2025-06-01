import { Gasto } from '../entities/gasto.entity';
import { IRepository } from './generic.repository';

export interface IGastoRepository extends IRepository<Gasto, string> {
  findByUserId(userId: string): Promise<Gasto[]>;
}