import { Module } from '@nestjs/common';
import { PdfCreateService } from './pdf-create.service';
import { PdfCreateController } from './pdf-create.controller';
import { CotizacionModule } from 'src/cotizacion/cotizacion.module';

@Module({
  providers: [PdfCreateService],
  controllers: [PdfCreateController],
  exports: [PdfCreateService],
  imports: [CotizacionModule],
})
export class PdfCreateModule {}
