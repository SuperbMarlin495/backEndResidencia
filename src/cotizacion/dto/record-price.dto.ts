import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class record_priceDto{
    @IsString()
    @IsNotEmpty()
    general_description: string;

    @IsString()
    link?: LinkStyle;

    @IsNumber()
    @IsNotEmpty()
    fk_info_customer: number
}