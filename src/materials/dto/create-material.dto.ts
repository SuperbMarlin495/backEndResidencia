import {IsString, IsNotEmpty, IsEmail, IsNumber, isNotEmpty, IsBoolean} from 'class-validator';

export class CreateMaterialDto {
    @IsNumber()
    id_product?: number;

    @IsString()
    @IsNotEmpty()
    name_product: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsNumber()
    @IsNotEmpty()
    unit_measurement: string;

    @IsBoolean()
    @IsNotEmpty()
    packing: boolean

    @IsNumber()
    @IsNotEmpty()
    precioPza: number;

    @IsString()
    imgProduct: string;
}
