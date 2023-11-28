import {IsString, IsNotEmpty, IsEmail, IsNumber} from 'class-validator';

export class createUserDto{
    @IsString()
    @IsNotEmpty()
    user_name: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @IsString()
    company: string;
    @IsEmail()
    @IsNotEmpty()
    emails_address: string;
    @IsNumber()
    @IsNotEmpty()
    cell_number: string;
    @IsNumber()
    fk_rolUser: number;
}