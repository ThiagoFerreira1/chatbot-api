import { Body, Controller, Post } from '@nestjs/common';
import { AuthDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('login')
    public async login(@Body() dto:AuthDTO) {
        return await this.service.login(dto);
    }
}
