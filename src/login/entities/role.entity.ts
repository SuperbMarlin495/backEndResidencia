import { type } from 'os';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class roleName{
    @PrimaryGeneratedColumn()
    id_rol: number;
    @Column()
    nameRol: string;
}