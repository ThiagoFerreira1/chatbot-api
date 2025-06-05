import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDTO } from './auth.dto';
import { PrismaUserRepository } from 'src/database/prisma/repositories/prisma.user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly repo: PrismaUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: AuthDTO): Promise<{ access_token: string }> {
    const user = await this.repo.findByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    const isPasswordValid = await user.comparePassword(dto.senha);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    const payload = { sub: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }

  async validateUser(payload: { sub: number; email: string }) {
    const user = await this.repo.findByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    return user;
  }
}
