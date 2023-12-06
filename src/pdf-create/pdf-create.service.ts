import { Injectable } from '@nestjs/common';
import { join, resolve } from 'path';
const pdfDocument = require('pdfkit-table'); //Con esto estamos importando pdfkit

@Injectable()
export class PdfCreateService {

  async createRows(dataCotizacion){
    const row_breakdown = [];
    await dataCotizacion.breakdown_price.forEach(element => {
      const list_product = [element.product.name_product, element.product.description, element.product.precioPza + ' Pza']
      row_breakdown.push(list_product);
    });

    return row_breakdown;
  }

    async generatePDF(dataCotizacion): Promise<Buffer> {
        console.log(dataCotizacion);
        var rowsCreat = await this.createRows(dataCotizacion);
        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new pdfDocument({
                size: "LETTER",
                bufferPages: true,//Damos permiso para que se maneje el archivo de salida
                autoFirstPage: false // Esto es para poder tu crear la primera pagina
            })//Con este metodo estamos creando el nuevo archivo pdf

            let pageNumber = 0;
            //======================Primera pagina======================================
            doc.addPage();
            // Establecer un rectángulo negro que cubra toda la página
            doc.rect(0, 0, doc.page.width, doc.page.height).fill('black');
            doc.image(join(process.cwd(), "../images/LogoPNG.png"), doc.page.width / 2 - 200, 250, { width: 400 })
            doc.text('', 0, 400);
            

            //=============================================================
            doc.addPage(); //Esto es para agregar una pagina
            doc.rect(0, -690, doc.page.width, doc.page.height).fill('black');//Cuadro negro de arriba
            doc.image(join(process.cwd(), "images/LogoPNG.png"), doc.page.width - 550, 25, { width: 150 });
            doc.fillColor('white')
            doc.fontSize(30);
            doc.text("Cotización", 350, 50);

            doc.fillColor('black');
            doc.fontSize(18);
            doc.text("Nombre:", 100, 150);
            doc.text(dataCotizacion.custumer.firstName+ ' ' +dataCotizacion.custumer.lastName, 200, 150);
            doc.text("Fecha:", 350, 150);
            var dateRegister: Date = dataCotizacion.date_mov.toLocaleDateString('es');
            doc.text(dateRegister, 450, 150);
            

            doc.text("", 40, 200);
            const table = {
                title: "",
                subtitle: "",
                headers: [ "Producto", "Descripción", "Precio P/pza" ],
                rows: rowsCreat,
                Option:{
                  divider: {
                    header: {disabled: false, width: 0.5, opacity: 0.5},
                    horizontal: {disabled: true, with: 0.5, opacity: 0.5}
                  }
                }
              };

              doc.table(table, {
                columnsSize: [175, 175, 175],
                // prepareHeader: () => doc.font("Helvetica-Bold").fontSize(15),
                // prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                //   doc.font("Helvetica").fontSize(18);
                // //   indexColumn === 0 && doc.addBackground(rectRow, 'blue', 0.15);
                // },
              });;

            
              doc.moveTo(27, 600).lineTo(doc.page.width - 27, 600).stroke();
              doc.fillColor('black');
              doc.fontSize(22);
              doc.text("Precios más iva:", 250, 635);
              doc.fontSize(18);
              doc.text("Precios sujetos a cambio sin previo aviso", 150, 670);
              
            //=============================================================
            doc.addPage();
            doc.rect(0, -650, doc.page.width, doc.page.height).fill('black');//Cuadro negro de arriba
            doc.image(join(process.cwd(), "images/LogoPNG.png"), doc.page.width - 400, 15, { width: 200 });
           
            doc.fillColor('black')
            doc.fontSize(25);
            doc.text("Tiempo de entrega: ", 210, 300).stroke();
            doc.font("Helvetica").fontSize(19);
            doc.text("Inmediato", 280, 380);
            doc.font("Helvetica").fontSize(25);
            doc.text("Servicio a domicilio sin costo: ", 160, 450);
            doc.rect(0, 700, doc.page.width, doc.page.height).fill('black');

            //========================Ultima pagina de informacion=====================================
            doc.addPage();
            // Establecer un rectángulo negro que cubra toda la página
            doc.rect(0, 0, doc.page.width, doc.page.height).fill('black');
            doc.text('', 0, 400);
            doc.font("Helvetica").fontSize(30);
            doc.fillColor('#ecb40e');
            doc.text("Deseo comunicarme con", 130, 90);
            doc.text("Empaques Morrison", 160, 140);
            doc.image(join(process.cwd(), "../images/correo.png"), doc.page.width / 2 - 25, 210, { width: 50 })
            doc.font("Helvetica").fontSize(25);
            doc.fillColor('white');
            doc.text("empaquesmorrison@gmail.com", 125, 290);
            doc.image(join(process.cwd(), "../images/whattsapIcon.png"), doc.page.width / 2 - 25, 350, { width: 50 })
            doc.text("+52 3316618223", 200, 450);
            doc.text("+52 3314135076", 200, 500);
            doc.text("+52 3336622316", 200, 550);
            doc.text("3333309490", 225, 600);

            //========================Metodo para redenrizar=====================================
            const buffer = []
            doc.on('data', buffer.push.bind(buffer))
            doc.on('end', () => {
                const data = Buffer.concat(buffer)
                resolve(data)
            })
            doc.end()//Esto indica que termiando de trabajar con nuestro pdf


        })

        return pdfBuffer;
    }
}
