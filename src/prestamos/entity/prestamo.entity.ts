import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Prestamo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isbn_libro: string;

    @Column()
    numero_control_usuario: string;

    @Column()
    fecha_prestamo: string;

    @Column({ nullable: true })
    fecha_devolucion: string;

    @Column()
    estado: string;
}
