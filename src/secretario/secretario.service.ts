import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Secretario} from "./entities/secretario.entity"
import { CreateSecretarioDto } from './dto/create-secretario.dto';
import { UpdateSecretarioDto } from './dto/update-secretario.dto';

@Injectable()
export class SecretarioService {
  constructor(@InjectRepository(Secretario) private readonly secretarioRepo: Repository<Secretario>) {}
  create(createEstudianteDto: CreateSecretarioDto) {
    return 'This action adds a new estudiante';
  }

  findAll() {
    return `This action returns all estudiante`;
  }

  async findOne(id: string) {
    const secretario = await this.secretarioRepo.findOneBy({mail: id});
    if (!secretario) {
    // Retorna null si no existe
    return null;
  }
    return secretario;
  }
  update(id: number, updateSecretarioDto: UpdateSecretarioDto) {
    return `This action updates a #${id} secretario`;
  }

  remove(id: number) {
    return `This action removes a #${id} secretario`;
  }
}
