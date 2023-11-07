import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, } from 'typeorm';

import { record_price } from './recordPrice.entity';
import { product } from 'src/materials/entities/material.entity';

@Entity()
export class breakdown_price {
    @PrimaryGeneratedColumn()
    id_customer: number;

    @Column()
    qty_product: number;

    //Relacion con la tabla record_price Muchos a uno(muchos registros(desglose) le pertenecen a un registro)
    @Column()
    fk_record_price: number;
    @ManyToOne(() => record_price, record_price => record_price.id_record_price)
    recordPrice: record_price;

    //Relacion con la tabla de producto uno a uno (un registro del desglose le pertenece a un producto )
    //Como es de uno a uno la relacion se hace con la columan de fk 
    @Column()
    @OneToOne(() => product)
    @JoinColumn()
    fk_product: product;
}