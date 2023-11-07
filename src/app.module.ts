import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CotizacionModule } from './cotizacion/cotizacion.module';
import { MaterialsModule } from './materials/materials.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-empaques-test-1.cyrtfkz5fae1.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'LI$#2023JI',
      database: 'cotizacion_BD',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
     MaterialsModule, CotizacionModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
