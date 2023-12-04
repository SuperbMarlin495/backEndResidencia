import { Module } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';
import { CotizacionController } from './cotizacion.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { breakdown_price } from './entities/cotizacion.entity'; 
import { record_price } from './entities/recordPrice.entity';
@Module({
  imports: [TypeOrmModule.forFeature([breakdown_price, record_price])],
  controllers: [CotizacionController],
  providers: [CotizacionService],
  exports: [CotizacionService],
})
export class CotizacionModule {}
