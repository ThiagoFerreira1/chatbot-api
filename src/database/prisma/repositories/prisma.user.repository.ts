import { PrismaService } from '../prisma.service';
import { UsuarioEntity } from 'src/domain/entities/usuario.entity';
import { UserMapper } from '../mappers/usuario.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(entity: UsuarioEntity): Promise<UsuarioEntity | null> {
    console.log('Creating user:', entity);
    const created = await this.prisma.usuarios.create({
      data: {
        nome: entity.nome,
        telefone: entity.telefone,
        email: entity.email,
        senha: entity.senha,
        dataCriacao: new Date(),
      },
    });

    return this.findById(created.id);
  }

  async findAll(): Promise<UsuarioEntity[]> {
    const result = await this.prisma.usuarios.findMany();

    return result.map(UserMapper.toDomain);
  }

  async findById(id: number): Promise<UsuarioEntity | null> {
    const result = await this.prisma.usuarios.findUnique({
      where: { id: id },
    });

    return result ? UserMapper.toDomain(result) : null;
  }

  async delete(id: number): Promise<void> {
    const deleted = await this.prisma.usuarios.delete({
      where: { id: id },
    });
  }

  async update(
    id: number,
    entity: Partial<UsuarioEntity>,
  ): Promise<UsuarioEntity | null> {
    const updated = await this.prisma.usuarios.update({
      data: {
        nome: entity?.nome,
        telefone: entity?.telefone,
        email: entity?.email,
        dataAtualizacao: new Date(),
      },
      where: {
        id: id,
      },
    });

    return this.findById(updated.id);
  }

  async findByEmail(email: string): Promise<UsuarioEntity | null> {
    const result = await this.prisma.usuarios.findFirst({
      where: { email: email },
    });

    return result ? UserMapper.toDomain(result) : null;
  }
}
