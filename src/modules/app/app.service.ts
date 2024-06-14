import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly db: DatabaseService) {}
  async getHello() {
    const result = await this.db.post.findMany();
    console.log(result);

    return 'Hello World!';
  }
}
