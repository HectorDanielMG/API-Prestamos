import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreatePrestamoDto {
  @IsString()
  @IsNotEmpty()
  isbn_libro: string;

  @IsString()
  @IsNotEmpty()
  numero_control_usuario: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_prestamo: string;

  @IsDateString()
  @IsOptional()
  fecha_devolucion?: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
