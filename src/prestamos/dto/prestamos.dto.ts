export class CreatePrestamoDto {
    isbn_libro: string;
    numero_control_usuario: string;
    fecha_prestamo: string;
    fecha_devolucion?: string;
    estado: string;
}
