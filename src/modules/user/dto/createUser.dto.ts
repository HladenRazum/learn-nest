import { User } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements Partial<User> {
  @IsString()
  @IsNotEmpty({ message: 'email must not be empty' })
  email: string;

  @MinLength(3, { message: 'password must be at least 3 characters long' })
  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;
}
