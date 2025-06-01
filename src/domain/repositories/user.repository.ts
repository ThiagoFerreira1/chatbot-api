import { User } from '../entities/user.entity';
import { IRepository } from './generic.repository';

export interface IUserRepository extends IRepository<User, string> {}