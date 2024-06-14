import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.db.user.findFirst({
        where: {
          email: createUserDto.email,
        },
      });

      if (existingUser) {
        throw new HttpException(
          'User with this email already exists',
          HttpStatus.CONFLICT,
        );
      }

      const result = await this.db.user.create({
        data: createUserDto,
        select: {
          id: true,
          email: true,
          firstname: true,
          lastname: true,
        },
      });

      if (!result) {
        throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return {
        user: result,
        message: 'Successfully created user',
      };
    } catch (error) {
      return {
        error,
        message: 'Could not create user',
      };
    }
  }
}
