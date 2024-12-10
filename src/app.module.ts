import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ||'localhost',
      port: parseInt(process.env.PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '161002',
      database: process.env.DB_DATABASE || 'library',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LibrosModule,
    UsuariosModule,
    PrestamosModule,
  ],
  providers: [DatabaseService]
})
export class AppModule {}
