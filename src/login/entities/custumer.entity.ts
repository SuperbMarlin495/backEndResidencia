import { type } from 'os';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { record_price } from 'src/cotizacion/entities/recordPrice.entity'


//nullable: true => para que pueda ser nulo el dato
@Entity()//Este decorador indica que es para que pueda convertir typeorm a una tabla
export class customer {
    @PrimaryGeneratedColumn()
    id_customer: number;
    @Column({unique: true})
    user_name: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column( )
    lastName: string;
    @Column({nullable: true})
    alias: string;
    @Column()
    company: string;
    @Column()
    emails_address: string;
    @Column()
    cell_number: number;
    @Column()
    fk_rolUser: number;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})//Este data es para que tome el tiempo actual
    dateTime_register: Date;

    //Realacion uno a muchos(Un usuario puede tener muchos registros)
    @OneToMany(() => record_price, record_price => record_price.id_record_price )
    record_price: record_price[] //saber cuantas cotizaciones tiene el usuario
}