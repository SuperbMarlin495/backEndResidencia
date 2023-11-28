import { Controller, Get, Res } from '@nestjs/common';
import { PdfCreateService } from './pdf-create.service';

@Controller('pdf-create')
export class PdfCreateController {

    constructor(private readonly createPDF: PdfCreateService){}

    @Get("pdf")
    async downloadPDF(@Res() res): Promise<void>{
        const buffer = await this.createPDF.generatePDF();

        const fileName = 'Factura' + Date.now()+'.pdf';
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename='+fileName,
            'Content-Length': buffer.length,
        })

        res.end(buffer);
    }
}
