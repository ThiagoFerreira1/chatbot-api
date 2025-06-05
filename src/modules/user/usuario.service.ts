import { Inject, Injectable } from '@nestjs/common';
import { UsuarioEntity } from 'src/domain/entities/usuario.entity';
import { CreateUsuarioDTO } from './usuario.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaUserRepository } from 'src/database/prisma/repositories/prisma.user.repository';

@Injectable()
export class UsuarioService {
  constructor(
    private readonly repo: PrismaUserRepository,
  ) {}

  async create(dto: CreateUsuarioDTO): Promise<UsuarioEntity | null> {
    const senhaHash = await bcrypt.hash(dto.senha, 10);

    const entity = {
      nome: dto.nome,
      telefone: dto.telefone,
      senha: senhaHash,
      email: dto.email,
    } as UsuarioEntity;

    try {
      return await this.repo.create(entity);
    } catch (error) {
      console.error('Falha ao criar usuário: ', error);
      throw new Error('Falha ao criar usuário');
    }
  }
}
