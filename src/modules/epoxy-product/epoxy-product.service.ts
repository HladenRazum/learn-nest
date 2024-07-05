import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EpoxyProductService {
  async findAll() {
    return 'All products';
  }

  async create(): Promise<any> {}
}
