import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUserDto {
  @IsEmail()
  @IsString()
  email: string;

  @MinLength(6)
  @IsString()
  password: string;
}