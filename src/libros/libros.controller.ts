import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './entity/libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  async crearLibro(@Body() createLibroDto: CreateLibroDto): Promise<Libro> {
    return await this.librosService.crearLibro(createLibroDto);
  }

  @Get()
  async obtenerLibros(): Promise<Libro[]> {
    return await this.librosService.obtenerLibros();
  }

  @Get(':id')
  async obtenerLibroPorId(@Param('id') id: number): Promise<Libro> {
    return await this.librosService.obtenerLibroPorId(id);
  }

  @Put(':id')
  async actualizarLibro(
    @Param('id') id: number,
    @Body() updateLibroDto: CreateLibroDto,
  ): Promise<Libro> {
    return await this.librosService.actualizarLibro(id, updateLibroDto);
  }

  @Delete(':id')
  async eliminarLibro(@Param('id') id: number): Promise<void> {
    return await this.librosService.eliminarLibro(id);
  }
}
