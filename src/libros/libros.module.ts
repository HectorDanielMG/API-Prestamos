import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entity/libro.entity';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])],
  providers: [LibrosService],
  controllers: [LibrosController],
})
export class LibrosModule {}
