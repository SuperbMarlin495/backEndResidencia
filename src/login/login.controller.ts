import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, HttpException, NotFoundException } from '@nestjs/common';
import { LoginService } from './login.service';
import { userLoginDto } from './dto/user-login.dto';
import { createUserDto } from './dto/createCustomer.dto';
import { updateCustomerdto } from './dto/update-Customer.dto';
import { QueryFailedError } from 'typeorm';

@Controller('login')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}//Construtor que hace instancia al login service

  @Get()
  loginUser(@Body() userLogin: userLoginDto) {
    return this.loginService.getUserLogin(userLogin);
  }

  @Post()
  createUser(@Body() createCustomer: createUserDto){
      return this.loginService.createUser(createCustomer);
   
  }
  
  @Patch()
  updateCustomer(@Body() updateCustomer: updateCustomerdto){
    return this.loginService.updateUser(updateCustomer.id, updateCustomer);
  }
}
