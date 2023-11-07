import {IsString, IsNotEmpty} from 'class-validator'

export class userLoginDto {
    @IsString()
    @IsNotEmpty()
    user_name: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}
