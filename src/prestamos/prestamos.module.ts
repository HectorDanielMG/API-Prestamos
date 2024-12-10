import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entity/prestamo.entity';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  providers: [PrestamosService],
  controllers: [PrestamosController],
})
export class PrestamosModule {}
