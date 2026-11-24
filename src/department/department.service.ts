import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDepartmentDto } from '../../dto/createDepartment.dto.js';

@Injectable()
export class DepartmentService {
    constructor(private prisma:PrismaService){}


    //Get All Departments
    getAllDepartments(){
        return this.prisma.department.findMany();
    }

    //Get a single Department
    getSingleDepartment(id:number){
        return this.prisma.department.findUnique({
            where:{id}
        })
    }

    //Create a Department
    async createDepartment(data:CreateDepartmentDto){
        const department= await this.prisma.department.findUnique({
            where:{
                departmentName:data.departmentName,
            }
        })
        if(department){
            return "This Department exists"
        }
        return this.prisma.department.create({
            data,
        })
    }

    //Update a Department
    async updateDepartment(id:number, data:CreateDepartmentDto){
        const department= await this.prisma.department.findUnique({
            where:{
                id,
            }
        })
        if(!department){
            return "This Department does not exist"
        }
        return this.prisma.department.update({
            where:{id,},
            data,
        })
    }

    //Delete a Department
    async deleteDepartment(id:number){
        const department= await this.prisma.department.findUnique({
            where:{
                id,
            }
        })
        if(!department){
            return "That department does not exist"
        }
        return this.prisma.department.delete({
            where:{
                id,
            }
        })
    }
}
