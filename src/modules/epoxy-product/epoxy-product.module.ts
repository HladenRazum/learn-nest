import { Module } from '@nestjs/common';
import { EpoxyProductController } from './epoxy-product.controller';
import { EpoxyProductService } from './epoxy-product.service';

@Module({
  controllers: [EpoxyProductController],
  providers: [EpoxyProductService],
})
export class EpoxyProductModule {}
