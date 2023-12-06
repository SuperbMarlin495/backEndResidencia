import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { breakdown_price } from "../entities/cotizacion.entity";
import { customer } from '../../login/entities/custumer.entity'

export class record_priceDto{
    @IsString()
    @IsNotEmpty()
    general_description: string;

    @IsString()
    link?: string;

    @IsNumber()
    @IsNotEmpty()
    fk_info_customer: number;

    customer: customer
    breakdown_price: breakdown_price[];//Se hace la relacion para los datos de la entity
}