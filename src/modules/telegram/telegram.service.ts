// import { Injectable } from '@nestjs/common';
// import { TelegramProvider } from './telegram.provider';
// import { UsuarioService } from 'src/usuario/usuario.service';

// @Injectable()
// export class TelegramService {
//   constructor(
//     private readonly telegramProvider: TelegramProvider,
//     private readonly usuarioService: UsuarioService,
//   ) {}

//   async processMessage(update: any) {
//     const message = update.message;
//     const chatId = message.chat.id;
//     const text = message.text;

//     const usuario = await this.usuarioService.findByTelegramId(chatId);

//     const resposta = `Olá ${usuario?.nome ?? 'visitante'}! Você disse: ${text}`;

//     await this.telegramProvider.sendMessage(chatId, resposta);
//   }
// }
