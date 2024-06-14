import { Controller, Get, Post } from '@nestjs/common';
import { EpoxyProductService } from './epoxy-product.service';

@Controller('products')
export class EpoxyProductController {
  constructor(private readonly service: EpoxyProductService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Post()
  async createProduct() {
    return await this.service.create();
  }
}
