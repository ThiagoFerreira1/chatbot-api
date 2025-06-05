import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUsuarioDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  @IsPhoneNumber()
  telefone?: string | null;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
