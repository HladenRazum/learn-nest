import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseService } from '../database/database.service';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DatabaseService],
})
export class UserModule {}
