import { type } from 'os';
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
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

    @Column()
    precioPza: number;

    @Column()
    imgProduct: string;

    @OneToMany(() => breakdown_price, breakdown_price => (breakdown_price.id_breakdown, breakdown_price.product))
    breakdown_price: breakdown_price[]
}   
