import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './createCustomer.dto'
import { IsNotEmpty, IsNumber } from 'class-validator';

export class updateCustomerdto extends PartialType(createUserDto){
    @IsNumber()
    @IsNotEmpty()
    id: number;
}