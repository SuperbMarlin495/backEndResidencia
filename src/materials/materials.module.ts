import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';

import { TypeOrmModule } from '@nestjs/typeorm'
import { product } from './entities/material.entity'
import { breakdown_price } from 'src/cotizacion/entities/cotizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([product, breakdown_price])],//Esto es para poder hacer el repository(_db Context)
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
