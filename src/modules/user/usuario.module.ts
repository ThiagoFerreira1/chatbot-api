import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaUserRepository } from 'src/database/prisma/repositories/prisma.user.repository';
import { UsuarioController } from './usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    PrismaUserRepository,
  ],
  exports: [UsuarioService, PrismaUserRepository],
})
export class UsuarioModule {}
