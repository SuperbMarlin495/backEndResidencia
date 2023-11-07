import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
//Estos son los entitis que se utilizan para la conexion de los datos y el uso del repository
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from '../login/entities/custumer.entity'; 
import { roleName } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer, roleName])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
