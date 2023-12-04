import { Controller, Get, Param, Res } from '@nestjs/common';
import { PdfCreateService } from './pdf-create.service';
import { CotizacionService } from 'src/cotizacion/cotizacion.service'; 

@Controller('pdf-create')
export class PdfCreateController {

    constructor(private readonly createPDF: PdfCreateService,
        private readonly cotizacionData: CotizacionService
        ){}

    @Get(":id")
    async downloadPDF(@Res() res, @Param('id') id: number): Promise<void>{
        var dataCotizacion = await this.cotizacionData.findOneBreakdown(id);
        const buffer = await this.createPDF.generatePDF(dataCotizacion);

        const fileName = 'Factura' + Date.now()+'.pdf';
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename='+fileName,
            'Content-Length': buffer.length,
        })

        res.end(buffer);
    }
}
