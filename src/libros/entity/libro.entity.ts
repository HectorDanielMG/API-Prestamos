import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libros') // Nombre de la tabla en la base de datos
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  titulo: string;

  @Column({ length: 255 })
  autor: string;

  @Column({ length: 255, nullable: true })
  editorial?: string;

  @Column({ length: 13, unique: true })
  isbn: string;

  @Column({ length: 100, nullable: true })
  categoria?: string;

  @Column({ length: 50, nullable: true })
  idioma?: string;

  @Column({ default: 1 })
  copias_totales: number;

  @Column({ default: 1 })
  copias_disponibles: number;

  @Column({ type: 'date', nullable: true })
  fecha_publicacion?: Date;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ default: true })
  activo: boolean;
}
