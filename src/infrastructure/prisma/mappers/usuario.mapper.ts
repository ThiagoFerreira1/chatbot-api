import { Usuarios as PrismaUser } from '@prisma/client';
import { UsuarioEntity, UsuarioProps } from '../../../domain/entities/usuario.entity';

export class UserMapper {
  static toDomain(prismaUser: PrismaUser): UsuarioEntity {
    const props: UsuarioProps = {
      nome: prismaUser.nome,
      telefone: prismaUser.telefone,
      email: prismaUser.email,
      dataCriacao: prismaUser.dataCriacao,
      dataAtualizacao: prismaUser.dataAtualizacao,
    };

    return new UsuarioEntity(props, prismaUser.id);
  }
}