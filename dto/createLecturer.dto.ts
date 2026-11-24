import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateLecturerDto{
    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsNumber()
    @IsNotEmpty()
    phone:Number

    @IsString()
    @IsNotEmpty()
    Email:string

    @IsNumber()
    @IsNotEmpty()
    Salary:Number

    @IsString()
    @IsNotEmpty()
    Gender:string

    

    @IsString()
    @IsNotEmpty()
    Qualification:string

    @IsDate()
    @IsNotEmpty()
    HireDate:Date
  
}