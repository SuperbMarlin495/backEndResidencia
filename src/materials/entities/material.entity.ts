import { type } from 'os';
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import { breakdown_price } from 'src/cotizacion/entities/cotizacion.entity';

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

    @ManyToMany(type => breakdown_price, breakdownPrice => breakdownPrice.id_breakdown)
    breakdonPrice: breakdown_price[]
}