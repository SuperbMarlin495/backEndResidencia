import { Injectable } from '@nestjs/common';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { record_priceDto } from './dto/record-price.dto';
import { record_price } from './entities/recordPrice.entity';

@Injectable()
export class CotizacionService {

constructor(@InjectRepository(record_price) private recordPrice: Repository<record_price>
){}

  createBreakDown(record_priceData: record_priceDto) {
    var responseRecord = this.recordPrice.create(record_priceData);
    return this.recordPrice.save(responseRecord);
  }

  // obtainBreakdown() {
  //   var breakdown_price = this.breakdown_priceRepository.find();
  //  return breakdown_price;
  // }

  findOne(id: number) {
    return `This action returns a #${id} cotizacion`;
  }

  update(id: number, updateCotizacionDto: UpdateCotizacionDto) {
    return `This action updates a #${id} cotizacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizacion`;
  }
}
