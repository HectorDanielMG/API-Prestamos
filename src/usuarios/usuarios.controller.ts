import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entity/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto'; 
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crearUsuario(@Body() data: CreateUsuarioDto): Promise<Usuario> {
    // El servicio se encarga de encriptar el correo antes de guardarlo
    return await this.usuariosService.crearUsuario(data);
  }

  @Get()
  async obtenerUsuarios(): Promise<Usuario[]> {
    // El servicio se encarga de desencriptar el correo antes de devolver los usuarios
    return await this.usuariosService.obtenerUsuarios();
  }

  @Get(':id')
  async obtenerUsuarioPorId(@Param('id') id: number): Promise<Usuario> {
    // El servicio se encarga de desencriptar el correo al devolver un usuario
    return await this.usuariosService.obtenerUsuarioPorId(id);
  }

  @Put(':id')
  async actualizarUsuario(
    @Param('id') id: number,
    @Body() data: UpdateUsuarioDto,
  ): Promise<Usuario> {
    // El servicio se encarga de encriptar el correo antes de actualizarlo
    return await this.usuariosService.actualizarUsuario(id, data);
  }

  @Delete(':id')
  async eliminarUsuario(@Param('id') id: number): Promise<void> {
    // El servicio se encarga de eliminar el usuario
    return await this.usuariosService.eliminarUsuario(id);
  }
}
