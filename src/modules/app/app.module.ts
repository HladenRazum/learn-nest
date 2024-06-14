import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from 'src/validation/env.schema';
import { DatabaseModule } from '../database/database.module';
import { EpoxyProductModule } from '../epoxy-product/epoxy-product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
    }),
    DatabaseModule,
    EpoxyProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
