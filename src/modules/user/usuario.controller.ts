import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './usuario.dto';
import { UsuarioEntity } from 'src/domain/entities/usuario.entity';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Post('')
  public async create(
    @Body() dto: CreateUsuarioDTO,
  ): Promise<UsuarioEntity | null> {
    return await this.service.create(dto);
  }
}
