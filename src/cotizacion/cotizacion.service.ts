import { Injectable } from '@nestjs/common';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { breakdown_price } from './entities/cotizacion.entity';

@Injectable()
export class CotizacionService {

constructor(@InjectRepository(breakdown_price) private breakdown_price: Repository<breakdown_price>
){}

  create(createCotizacionDto: CreateCotizacionDto) {
    return 'This action adds a new cotizacion';
  }

  findAll() {
    return `This action returns all cotizacion`;
  }

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
