import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Jefatura} from "./entities/jefatura.entity"
import { CreateJefaturaDto } from './dto/create-jefatura.dto';
import { UpdateJefaturaDto } from './dto/update-jefatura.dto';

@Injectable()
export class JefaturaService {
  constructor(@InjectRepository(Jefatura) private readonly jefaturaRepo: Repository<Jefatura>) {}
  create(createEstudianteDto: CreateJefaturaDto) {
    return 'This action adds a new jefatura';
  }

  findAll() {
    return `This action returns all jefatura`;
  }

  async findOne(correo: string) {
    const jefatura = await this.jefaturaRepo.findOneBy({mail: correo});
    console.log(jefatura, "+", jefatura.mail)
    return jefatura;
  }

  update(id: number, updateJefaturaDto: UpdateJefaturaDto) {
    return `This action updates a #${id} jefatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} jefatura`;
  }
}
