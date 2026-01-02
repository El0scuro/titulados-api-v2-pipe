import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Estudiante } from '../estudiante/entities/estudiante.entity';
import {Profesor } from '../profesor/entities/profesor.entity';
import {Secretario } from '../Secretario/entities/secretario.entity';
import {Jefatura } from '../jefatura/entities/jefatura.entity';

@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepo: Repository<Estudiante>,

    @InjectRepository(Profesor)
    private readonly profesorRepo: Repository<Profesor>,

    @InjectRepository(Secretario)
    private readonly secretarioRepo: Repository<Secretario>,

    @InjectRepository(Jefatura)
    private readonly jefaturaRepo: Repository<Jefatura>,
  ) {}
  async encontrar(correo : string){
    const estudiante = await this.estudianteRepo.findOneBy({mail: correo});
    const profesor = await this.profesorRepo.findOneBy({mail: correo});
    const secretario = await this.secretarioRepo.findOneBy({mail: correo});
    const jefatura = await this.jefaturaRepo.findOneBy({mail: correo});
    const caja: (Estudiante| Profesor| Secretario| Jefatura| null)[] = [estudiante, profesor, secretario, jefatura];
    for(let i = 0; i < caja.length;i++){
        if(caja[i]){
            console.log("Existeee",caja[i]);
            return(caja[i]);
        }
    }
    
  }
}
