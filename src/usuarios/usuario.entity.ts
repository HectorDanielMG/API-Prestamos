import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios') // Nombre de la tabla en la base de datos
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 50, unique: true })
  numero_control: string;

  @Column({ length: 50 })
  rol: string;

  @Column({ default: true })
  activo: boolean;
}
