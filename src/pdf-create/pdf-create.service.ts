import { Injectable } from '@nestjs/common';
import { join, resolve } from 'path';
const pdfDocument = require('pdfkit-table'); //Con esto estamos importando pdfkit

@Injectable()
export class PdfCreateService {

    async generatePDF(dataCotizacion): Promise<Buffer> {
        console.log(dataCotizacion);
        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new pdfDocument({
                size: "LETTER",
                bufferPages: true,//Damos permiso para que se maneje el archivo de salida
                autoFirstPage: false // Esto es para poder tu crear la primera pagina
            })//Con este metodo estamos creando el nuevo archivo pdf

            let pageNumber = 0;

            // doc.on('pageAdded', () => {    //Metodo que se llama cada vez que se crea una pagina
            //     pageNumber++;
            //     if (pageNumber > 1) {
            //         doc.rect(0, -690, doc.page.width, doc.page.height).fill('black');//Cuadro negro de arriba
            //         doc.rect(0, 700, doc.page.width, doc.page.height).fill('black');//Cuadro negrio de abajo
            //         doc.image(join(process.cwd(), "images/LogoPNG.png"), doc.page.width - 550, 25, { width: 150 });
                    
            //     }

            //     let bottom = doc.page.margins.bottom;

            //     doc.page.margins.bottom = 0;
               
            //     doc.font("Helvetica");
            //     doc.fontSize(14);
            //     doc.fillColor('white')
            //     doc.text(
            //         'Pag ' + pageNumber,
            //         (doc.page.width - 100) * 0.5,
            //         doc.page.height - 50,
            //         {
            //             width: 100,
            //             aling: 'center',
            //             lineBreak: false,
            //         },
            //     )

            //     doc.page.margins.bottom = bottom;
            // })//Creacion de header y del footer

            //======================Primera pagina======================================
            doc.addPage();
            // Establecer un rectángulo negro que cubra toda la página
            doc.rect(0, 0, doc.page.width, doc.page.height).fill('black');
            doc.image(join(process.cwd(), "../images/LogoPNG.png"), doc.page.width / 2 - 200, 250, { width: 400 })
            doc.text('', 0, 400);
            // doc.font("Helvetica-Bold").fontSize(24);
            // Agregar contenido adicional (texto, imágenes, etc.) sobre el fondo negro
            // doc.font("Helvetica-Bold").fontSize(24).fillColor('white').text('Empaques Morrison', 200, 270);
            // doc.text("Empaques Morrison", {
            //     width: doc.page.width,
            //     aling: 'center'
            // });

            //=============================================================
            doc.addPage(); //Esto es para agregar una pagina
            doc.rect(0, -690, doc.page.width, doc.page.height).fill('black');//Cuadro negro de arriba
            doc.image(join(process.cwd(), "images/LogoPNG.png"), doc.page.width - 550, 25, { width: 150 });
            doc.fillColor('white')
            doc.fontSize(30);
            doc.text("Cotización", 350, 50);

            doc.fillColor('black')
            doc.fontSize(20);
            doc.text("Nombre:", 100, 150);
            doc.text("Fecha:", 400, 150);

            doc.text("", 40, 200);
            const table = {
                title: "",
                subtitle: "",
                headers: [ "Producto", "Descripción", "Precio" ],
                rows: [
                  [ "Switzerland", "12%", "+1.12%" ],
                  [ "France", "67%", "-0.98%" ],
                  [ "England", "33%", "+4.44%" ],
                ],
              };

              doc.table(table, {
                width: 550,
                padding: 5,
                columnSpacing: 5,
                prepareHeader: () => doc.font("Helvetica-Bold").fontSize(28),
                prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                  doc.font("Helvetica").fontSize(18);
                //   indexColumn === 0 && doc.addBackground(rectRow, 'blue', 0.15);
                },
              });;

            
              doc.rect(0, 700, doc.page.width, doc.page.height).fill('black');//Cuadro negrio de abajo

            //=============================================================
            doc.addPage();
            doc.fillColor('black')
            doc.fontSize(14);
            doc.text("", 50, 170);
            doc.text("El nombre de usuario es: ");
            doc.moveDown();
            doc.font("Helvetica").fontSize(16);
            doc.text("Esto es un ejemplo que demuestra que sirve");


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
