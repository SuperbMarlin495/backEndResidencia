import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { product } from './entities/material.entity';  //Nos traemos el enetity(Modelo) para crear el repository
import { Repository,  } from 'typeorm'; //Importamos la clase repository de typeorm para crearlo

@Injectable()
export class MaterialsService {
constructor(@InjectRepository(product) private productRespository: Repository<product>){}

  createNewProduct(createMaterialDto: CreateMaterialDto) {
    var newProduct = this.productRespository.create(createMaterialDto);
    this.productRespository.save(newProduct);
    return newProduct;
  }

  findAllProduct() {
    return this.productRespository.find();
  }

  async findOneMaterial(id: number) {
    return await this.productRespository.findOne({
      where:{
        id_product: id
      },
    });
  }

  updateMaterial(id: number, updateMaterialDto: UpdateMaterialDto) {
    return this.productRespository.update(id, updateMaterialDto);
  }

  deleteMaterial(id: number) {
    return this.productRespository.delete(id);
  }
}
