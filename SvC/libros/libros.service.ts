import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from '../../src/libros/libro.entity';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  async crearLibro(data: Partial<Libro>): Promise<Libro> {
    const nuevoLibro = this.libroRepository.create(data);
    return await this.libroRepository.save(nuevoLibro);
  }

  async obtenerLibros(): Promise<Libro[]> {
    return await this.libroRepository.find();
  }

  async obtenerLibroPorId(id: number): Promise<Libro> {
    return await this.libroRepository.findOne({ where: { id } });
  }

  async actualizarLibro(id: number, data: Partial<Libro>): Promise<Libro> {
    await this.libroRepository.update(id, data);
    return this.obtenerLibroPorId(id);
  }

  async eliminarLibro(id: number): Promise<void> {
    await this.libroRepository.delete(id);
  }
}
