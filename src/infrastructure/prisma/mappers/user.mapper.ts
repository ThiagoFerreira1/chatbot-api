import { User as PrismaUser } from '@prisma/client'; // tipo gerado pelo Prisma
import { User } from '../../../domain/entities/user.entity';

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return new User(
      prismaUser.nome,   
      prismaUser.telefone, 
      prismaUser.email ?? undefined,
      prismaUser.dataCriacao,  
      prismaUser.id,  
    );
  }
}