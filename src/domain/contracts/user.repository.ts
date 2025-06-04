import { UsuarioEntity } from '../entities/usuario.entity';
import { IRepository } from './generic.repository';

export interface IUserRepository extends IRepository<UsuarioEntity, number> {}
