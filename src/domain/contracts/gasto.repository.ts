import { gastoEntity } from '../entities/gasto.entity';
import { IRepository } from './generic.repository';

export interface IGastoRepository extends IRepository<gastoEntity, number> {
  findByUserId(usuarioID: number): Promise<gastoEntity[] | null>;
}
