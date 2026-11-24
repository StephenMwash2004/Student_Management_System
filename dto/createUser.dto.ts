import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsString()
    @IsNotEmpty()
    ADM_NO:string

    @IsString()
    @IsNotEmpty()
    phone:String

    @IsString()
    @IsNotEmpty()
    Gender:string

    @IsString()
    @IsNotEmpty()
    Email:string

    @IsString()
    @IsNotEmpty()
    address:string

    @IsString()
    @IsNotEmpty()
    DOB:string

    @IsString()
    @IsNotEmpty()
    Adm_date:string

  
}