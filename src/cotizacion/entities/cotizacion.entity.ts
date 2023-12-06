import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { record_price } from './recordPrice.entity';
import { product } from 'src/materials/entities/material.entity';
// import { breakdown_price_product } from './breakdown_product.entity';

@Entity()
export class breakdown_price {
  @PrimaryGeneratedColumn()
  id_breakdown: number;

  @Column()
  qty_product: number;

  // Relación ManyToOne con record_price 
  @ManyToOne(() => record_price, (recordPrice) => recordPrice.id_record_price)
  @JoinColumn({ name: 'fk_record_price' }) // Especifica el nombre de la columna en la tabla breakdown_price
  recordPrice: number;


  // @OneToMany(() => breakdown_price_product, breakdown_price_product => breakdown_price_product.id_breakdown_price, {cascade: true})
  // breakdown_price_product: breakdown_price_product[];
  // @ManyToMany(() => product, product => product.id_product)
  // @JoinTable()
  // product: product[]

  // @Column()
  @ManyToOne(() => product, product => product.id_product)
  product: product;
}
