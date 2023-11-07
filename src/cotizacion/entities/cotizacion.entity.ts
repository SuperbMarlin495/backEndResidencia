import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm'

@Entity()
export class breakdown_price {
    @PrimaryGeneratedColumn()
    id_customer: number;

    @Column()
    @IsNotEmpty()
    qty_product: number;

    @Column()
    @IsNotEmpty()
    fk_record_price: number;

    @Column()
    @IsNotEmpty()
    fk_product: number;
}
