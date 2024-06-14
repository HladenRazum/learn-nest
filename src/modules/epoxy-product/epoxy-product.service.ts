import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EpoxyProductService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    return 'All products';
  }

  async create() {
    try {
      const result = await this.db.epoxtProduct.create({
        data: {
          name: 'Reisin Sun',
          type: 'TABLE',
        },
      });

      if (!result) {
        throw new HttpException(
          'Could not create product',
          HttpStatus.BAD_REQUEST,
        );
      }

      return result;
    } catch (error) {
      return {
        error,
        message: 'Something went wrong',
      };
    }
  }
}
