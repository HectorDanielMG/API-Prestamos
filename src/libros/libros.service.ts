import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entity/libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  async crearLibro(createLibroDto: CreateLibroDto): Promise<Libro> {
    const nuevoLibro = this.libroRepository.create(createLibroDto);
    return await this.libroRepository.save(nuevoLibro);
  }

  async obtenerLibros(): Promise<Libro[]> {
    return await this.libroRepository.find();
  }

  async obtenerLibroPorId(id: number): Promise<Libro> {
    return await this.libroRepository.findOne({ where: { id } });
  }

  async actualizarLibro(id: number, updateLibroDto: CreateLibroDto): Promise<Libro> {
    await this.libroRepository.update(id, updateLibroDto);
    return this.obtenerLibroPorId(id);
  }

  async eliminarLibro(id: number): Promise<void> {
    await this.libroRepository.delete(id);
  }
}
