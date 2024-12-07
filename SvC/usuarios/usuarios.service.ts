import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../src/usuarios/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async crearUsuario(data: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async obtenerUsuarios(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async obtenerUsuarioPorId(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  async actualizarUsuario(id: number, data: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, data);
    return this.obtenerUsuarioPorId(id);
  }

  async eliminarUsuario(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
