import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { customer } from 'src/login/entities/custumer.entity'

@Entity()
export class record_price{
    @PrimaryGeneratedColumn()
    id_record_price: number;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    date_mov: Date
    @Column()
    @IsNotEmpty()
    general_description: string;

    @Column({nullable: true})
    link: LinkStyle;

    //Relacion de registro de cotizacion hacia la tabla customer
    @Column()
    @IsNotEmpty()
    fk_info_customer: number;//Se guarda el puro id del usuario para hacer la realcion
    @ManyToOne(() => customer, customer => customer.id_customer) //Relacion muchos a uno(Muchos registros pueden pertenecer a un usuario)
    customerCreate: customer //Saber cual usuario fue el responsable de crear la cotizacion
}