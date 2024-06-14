import { Controller, Get } from '@nestjs/common';
import { EpoxyProductService } from './epoxy-product.service';

@Controller('products')
export class EpoxyProductController {
  constructor(private readonly service: EpoxyProductService) {}

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}
