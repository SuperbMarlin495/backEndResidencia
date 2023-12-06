import { Module } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';
import { CotizacionController } from './cotizacion.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { breakdown_price } from './entities/cotizacion.entity'; 
import { record_price } from './entities/recordPrice.entity';
import { product } from 'src/materials/entities/material.entity';
import { customer } from 'src/login/entities/custumer.entity';
// import { breakdown_price_product } from './entities/breakdown_product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([breakdown_price, record_price, product, customer])],
  controllers: [CotizacionController],
  providers: [CotizacionService],
  exports: [CotizacionService],
})
export class CotizacionModule {}
