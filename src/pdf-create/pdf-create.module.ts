import { Module } from '@nestjs/common';
import { PdfCreateService } from './pdf-create.service';
import { PdfCreateController } from './pdf-create.controller';

@Module({
  providers: [PdfCreateService],
  controllers: [PdfCreateController]
})
export class PdfCreateModule {}
