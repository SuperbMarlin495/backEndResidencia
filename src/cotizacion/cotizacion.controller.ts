import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';

import { record_priceDto } from './dto/record-price.dto';

@Controller('cotizacion')
export class CotizacionController {
  constructor(private readonly cotizacionService: CotizacionService) {}

  @Post()
  createCotizacion(@Body() createRecordPricedto: record_priceDto) {
    return this.cotizacionService.createBreakDown(createRecordPricedto);
  }

  @Get()
  obtainBreakdown() {
    // return this.cotizacionService.obtainBreakdown();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizacionService.findOneBreakdown(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotizacionDto: UpdateCotizacionDto) {
    return this.cotizacionService.update(+id, updateCotizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotizacionService.remove(+id);
  }
}