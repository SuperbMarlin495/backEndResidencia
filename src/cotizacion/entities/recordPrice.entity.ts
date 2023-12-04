
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { customer } from 'src/login/entities/custumer.entity'
import { breakdown_price } from './cotizacion.entity';
import { join } from 'path';

@Entity()
export class record_price{
    @PrimaryGeneratedColumn()
    id_record_price: number;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    date_mov: Date
    @Column()
    general_description: string;

    @Column({nullable: true})
    link: string;

     //Relacion de registro de cotizacion hacia la tabla customer
     @Column()
     @ManyToOne(() => customer, customer => customer.id_customer) //Relacion muchos a uno(Muchos registros pueden pertenecer a un usuario)
     fk_info_customer: number;//Se guarda el puro id del usuario para hacer la realcion

    //Relacion con la tabla breakdown_price (Un registro le pertenece a muchos registros(degloses) )
    @OneToMany(() => breakdown_price, breakdown_price => (breakdown_price.id_breakdown, breakdown_price.recordPrice), {cascade: true})
    breakdown_price: breakdown_price[];
    // breakdown_price: number;
}