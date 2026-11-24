import { IsNotEmpty, IsString } from "class-validator"

export class CreateDepartmentDto{
    @IsString()
    @IsNotEmpty()
    departmentName:string

    @IsString()
    @IsNotEmpty()
    HOD:string

}