import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '../../src/usuarios/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crearUsuario(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return await this.usuariosService.crearUsuario(data);
  }

  @Get()
  async obtenerUsuarios(): Promise<Usuario[]> {
    return await this.usuariosService.obtenerUsuarios();
  }

  @Get(':id')
  async obtenerUsuarioPorId(@Param('id') id: number): Promise<Usuario> {
    return await this.usuariosService.obtenerUsuarioPorId(id);
  }

  @Put(':id')
  async actualizarUsuario(
    @Param('id') id: number,
    @Body() data: Partial<Usuario>,
  ): Promise<Usuario> {
    return await this.usuariosService.actualizarUsuario(id, data);
  }

  @Delete(':id')
  async eliminarUsuario(@Param('id') id: number): Promise<void> {
    return await this.usuariosService.eliminarUsuario(id);
  }
}
