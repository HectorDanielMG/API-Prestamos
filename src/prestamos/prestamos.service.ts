import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './entity/prestamo.entity';
import { CreatePrestamoDto } from './dto/prestamos.dto';

@Injectable()
export class PrestamosService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly prestamoRepository: Repository<Prestamo>,
  ) {}

  async create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
    // Crear la instancia de Prestamo con los datos del DTO
    const prestamo = this.prestamoRepository.create(createPrestamoDto);
    // Guardar el nuevo préstamo en la base de datos
    return await this.prestamoRepository.save(prestamo);
  }

  async findAll(): Promise<Prestamo[]> {
    // Obtener todos los préstamos
    return await this.prestamoRepository.find();
  }
}
