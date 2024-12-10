import { IsString, IsNotEmpty, IsOptional, IsInt, Min, IsDate, IsISBN } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsOptional()
  editorial?: string;

  @IsISBN()
  isbn: string;

  @IsString()
  @IsOptional()
  categoria?: string;

  @IsString()
  @IsOptional()
  idioma?: string;

  @IsInt()
  @Min(1)
  copias_totales: number;

  @IsInt()
  @Min(0)
  copias_disponibles: number;

  @IsDate()
  @IsOptional()
  fecha_publicacion?: Date;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsOptional()
  activo?: boolean;
}
