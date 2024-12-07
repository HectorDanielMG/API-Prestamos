import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './prestamo.entity';
import { PrestamosService } from '../../SvC/prestamos/prestamos.service';
import { PrestamosController } from '../../SvC/prestamos/prestamos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  providers: [PrestamosService],
  controllers: [PrestamosController],
})
export class PrestamosModule {}
