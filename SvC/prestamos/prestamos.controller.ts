import { Controller, Post, Body, Get } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from '../../src/prestamos/dto/prestamos.dto';
import { Prestamo } from '../../src/prestamos/prestamo.entity';

@Controller('prestamos')
export class PrestamosController {
    constructor(private readonly prestamoService: PrestamosService) {}

    @Post()
    async create(@Body() createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
        return this.prestamoService.create(createPrestamoDto);
    }

    @Get()
    async findAll(): Promise<Prestamo[]> {
        return this.prestamoService.findAll();
    }
}