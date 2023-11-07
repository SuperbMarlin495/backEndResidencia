import { Injectable } from '@nestjs/common';
import { userLoginDto } from './dto/user-login.dto';
import { stringify } from 'querystring';
import { customer } from './entities/custumer.entity';
import { Repository, ReturnDocument } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { createUserDto } from './dto/createCustomer.dto';
import { updateCustomerdto } from './dto/update-Customer.dto';

@Injectable()
export class LoginService {

constructor(@InjectRepository(customer) private customerRepository: Repository<customer>){}//Esto es para usar el entity(Modelo) y que hace su conexon con la base de datos

  async getUserLogin(userLogin: userLoginDto): Promise<boolean> {
    const user: customer = await this.customerRepository.findOne({
      where: {
        user_name: userLogin.user_name,
        password: userLogin.password,
      },
    });
    // Comprobar si se encontró un usuario en la base de datos y si las credenciales coinciden
    const response: boolean = !!user;
    return response;
  }

  async createUser(creteCustomer: createUserDto){
    var dataNew = await this.customerRepository.create(creteCustomer);
    var newCustomer = {
      user_Name: dataNew.user_name,
      emaile: dataNew.emails_address
    }
    this.customerRepository.save(dataNew);
    return newCustomer
  }

  updateUser(id: number, updateCustomer: updateCustomerdto)
  {
    return this.customerRepository.update(id, updateCustomer);
  } 
}
