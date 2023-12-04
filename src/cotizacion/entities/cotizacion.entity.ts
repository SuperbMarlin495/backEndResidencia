import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { record_price } from './recordPrice.entity';
import { product } from 'src/materials/entities/material.entity';

@Entity()
export class breakdown_price {
  @PrimaryGeneratedColumn()
  id_breakdown: number;

  @Column()
  qty_product: number;

  // @ManyToOne(() => record_price, recordPrice => recordPrice.id_record_price)
  // recordPrice: record_price;r

  // Relación ManyToOne con record_price 
  @ManyToOne(() => record_price, (recordPrice) => recordPrice.id_record_price)
  @JoinColumn({ name: 'fk_record_price' }) // Especifica el nombre de la columna en la tabla breakdown_price
  recordPrice: number;

@ManyToMany(type => product, Product => Product.id_product)
@JoinTable()
product: product[]
}
