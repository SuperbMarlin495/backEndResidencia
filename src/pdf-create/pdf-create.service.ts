import { Injectable } from '@nestjs/common';
import { join, resolve } from 'path';
const pdfDocument = require('pdfkit-table'); //Con esto estamos importando pdfkit

@Injectable()
export class PdfCreateService {

    async generatePDF(): Promise<Buffer> {

        const pdfBuffer: Buffer = await new Promise(resolve => {
            const doc = new pdfDocument({
                size: "LETTER",
                bufferPages: true,//Damos permiso para que se maneje el archivo de salida
                autoFirstPage: false // Esto es para poder tu crear la primera pagina
            })//Con este metodo estamos creando el nuevo archivo pdf

            let pageNumber = 0;

            doc.on('pageAdded', () => {    //Metodo que se llama cada vez que se crea una pagina
                pageNumber++;
                if (pageNumber > 1) {
                    doc.rect(0, -690, doc.page.width, doc.page.height).fill('black');//Cuadro negro de arriba
                    doc.rect(0, 700, doc.page.width, doc.page.height).fill('black');//Cuadro negrio de abajo
                    doc.image(join(process.cwd(), "images/LogoPNG.png"), doc.page.width - 550, 25, { width: 150 });
                    
                }

                let bottom = doc.page.margins.bottom;

                doc.page.margins.bottom = 0;
               
                doc.font("Helvetica");
                doc.fontSize(14);
                doc.fillColor('white')
                doc.text(
                    'Pag ' + pageNumber,
                    (doc.page.width - 100) * 0.5,
                    doc.page.height - 50,
                    {
                        width: 100,
                        aling: 'center',
                        lineBreak: false,
                    },
                )

                doc.page.margins.bottom = bottom;
            })//Creacion de header y del footer

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
            doc.fillColor('white')
            doc.fontSize(30);
            doc.text("Cotización", 350, 50);

            const table = {
                title: "Tabla de ejemplo",
                subtitle: "Esta es una tabla de ejemplo",
                headers: ["Id", "Nombre"],
                rows: [["1", 'Dev Litos'], ["2", "Programadores de Jabil"]]
            }
            doc.table(table, { columnSize: [300, 20] })

            
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
