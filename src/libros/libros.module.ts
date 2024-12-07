import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { LibrosService } from '../../SvC/libros/libros.service';
import { LibrosController } from '../../SvC/libros/libros.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  providers: [LibrosService],
  controllers: [LibrosController],
})
export class LibrosModule {}
