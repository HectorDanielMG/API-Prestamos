import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from '../../src/prestamos/prestamo.entity';
import { CreatePrestamoDto } from '../../src/prestamos/dto/prestamos.dto';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo)
        private readonly prestamoRepository: Repository<Prestamo>,
    ) {}

    async create(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
        const prestamo = this.prestamoRepository.create(createPrestamoDto);
        return await this.prestamoRepository.save(prestamo);
    }

    async findAll(): Promise<Prestamo[]> {
        return await this.prestamoRepository.find();
    }
}