import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('')
export class AppController {
  @Get()
  async healthcheck() {
    return {
      success: true,
    };
  }
}
