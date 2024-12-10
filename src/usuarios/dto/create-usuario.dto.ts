import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  apellido: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  numero_control: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  rol: string;

  @IsNotEmpty()
  activo: boolean;
}
