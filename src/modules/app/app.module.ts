import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from 'src/validation/env.schema';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
