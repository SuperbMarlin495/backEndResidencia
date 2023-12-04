import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CotizacionModule } from './cotizacion/cotizacion.module';
import { MaterialsModule } from './materials/materials.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfCreateModule } from './pdf-create/pdf-create.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envsConfig from './config/envs.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envsConfig().DATABASE.DB_HOST,
      port: +envsConfig().DATABASE.DB_PORT,
      username: envsConfig().DATABASE.DB_USER,
      password: envsConfig().DATABASE.DB_PASSWORD,
      database: envsConfig().DATABASE.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MaterialsModule,
    CotizacionModule,
    LoginModule,
    PdfCreateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
