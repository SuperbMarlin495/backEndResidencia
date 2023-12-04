import { IsNotEmpty, IsNumber } from 'class-validator';
import { product } from 'src/materials/entities/material.entity';

export class CreateCotizacionDto {
  @IsNumber()
  @IsNotEmpty()
  qty_product: number;

  @IsNumber()
  @IsNotEmpty()
  fk_record_price: number;

  @IsNumber()
  @IsNotEmpty()
  fk_product: product[];
}
