import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Profesor} from "./entities/profesor.entity"
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Injectable()
export class ProfesorService {
  constructor(@InjectRepository(Profesor) private readonly profesorRepo: Repository<Profesor>) {}
  create(createProfesorDto: CreateProfesorDto) {
    return 'This action adds a new profesor';
  }

  findAll() {
    return `This action returns all profesor`;
  }

  async findOne(correo: string) {
    const profesor = await this.profesorRepo.findOneBy({mail: correo});
    console.log(profesor, "+", profesor.mail)
    return profesor;
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
