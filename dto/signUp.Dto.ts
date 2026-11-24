import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsEnum,
  } from 'class-validator';
  
  export enum UserRole {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
  }
  
  export class signInUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @MinLength(6)
    password: string;
  
    @IsEnum(UserRole)
    role: UserRole;
  }