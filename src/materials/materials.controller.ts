import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {} //Se toma como la intancia a los servicios para usar su funciones

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialsService.createNewProduct(createMaterialDto);
  }

  @Get()
  findAllProduct() {
    return this.materialsService.findAllProduct();
  }

  @Get(':id')
  findOneMaterial(@Param('id') id: number) {
    return this.materialsService.findOneMaterial(id);
  }

  @Patch(':id')
  updateMaterial(@Param('id') id: number, @Body() updateMaterialDto: UpdateMaterialDto) {
    var productUpdate = this.materialsService.updateMaterial(id, updateMaterialDto);
    return productUpdate;
  }

  @Delete(':id')
  deleteMaterial(@Param('id') id: number) {
    return this.materialsService.deleteMaterial(id);
  }
}
