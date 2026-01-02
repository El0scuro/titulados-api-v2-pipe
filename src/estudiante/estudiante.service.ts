import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Estudiante} from "./entities/estudiante.entity"
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(@InjectRepository(Estudiante) private readonly estudianteRepo: Repository<Estudiante>) {}
  create(createEstudianteDto: CreateEstudianteDto) {
    return 'This action adds a new estudiante';
  }

  findAll() {
    return `This action returns all estudiante`;
  }

  async findOne(correo: string) {
    const estudiante = await this.estudianteRepo.findOneBy({mail: correo});
    console.log(estudiante, "+", estudiante.mail)
    return estudiante;
  }


  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
