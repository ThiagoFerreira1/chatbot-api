import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/user/usuario.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { AppController } from './modules/app/app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';

@Module({
  imports: [UsuarioModule, PrismaModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AuthService],
})
export class AppModule {}
