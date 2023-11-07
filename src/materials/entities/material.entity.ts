import { type } from 'os';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()//Este decorador indica que es para que pueda convertir typeorm a una tabla
export class product {
    @PrimaryGeneratedColumn()
    id_product: number;
    @Column()
    name_product: string;
    @Column()
    description: string;
    @Column()
    unit_measurement: string;
    @Column()
    packing: boolean;
}