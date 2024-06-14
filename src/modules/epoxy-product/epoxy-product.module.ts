import { Module } from '@nestjs/common';
import { EpoxyProductController } from './epoxy-product.controller';
import { EpoxyProductService } from './epoxy-product.service';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [EpoxyProductController],
  providers: [EpoxyProductService, DatabaseService],
})
export class EpoxyProductModule {}
