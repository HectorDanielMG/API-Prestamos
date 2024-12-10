import { IsOptional, IsString, IsBoolean, Length } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  nombre?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  apellido?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  numero_control?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  rol?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
