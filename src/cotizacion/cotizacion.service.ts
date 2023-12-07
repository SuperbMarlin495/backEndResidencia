import { Injectable } from '@nestjs/common';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { record_priceDto } from './dto/record-price.dto';
import { record_price } from './entities/recordPrice.entity';
import { breakdown_price } from './entities/cotizacion.entity'

@Injectable()
export class CotizacionService {

constructor(@InjectRepository(record_price) private recordPrice: Repository<record_price>,
@InjectRepository(breakdown_price) private breakdownPrice: Repository<breakdown_price>
){}

async obtainRecordPrice(){
  return await this.recordPrice.find({
    relations: {
      breakdown_price: {
        product: true,
      },
      custumer: true,
    }
  })
}

  createBreakDown(record_priceData: record_priceDto) {
    var responseRecord = this.recordPrice.create(record_priceData);
    return this.recordPrice.save(responseRecord);
  }

  async findOneBreakdown(id: number) {
    return await this.breakdownPrice.find({
      where:{
       recordPrice: id,
      }
    });
  }
  
  async findRecordPrice(id: number){
    return await this.recordPrice.findOne({
      relations: {
        breakdown_price: {
          product: true,
        },
        custumer: true,
      },
      where:{
        id_record_price: id
      }
    });
  }
  update(id: number, updateCotizacionDto: UpdateCotizacionDto) {
    return `This action updates a #${id} cotizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizacion`;
  }
}
