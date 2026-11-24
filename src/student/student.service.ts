import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from '../../dto/createUser.dto.js';


@Injectable()
export class StudentService {
    constructor(private prisma:PrismaService){}

    //Get all students
    getAllStudents(){
        return this.prisma.student.findMany()
    }

    //Get student by id
    getById(id:number){
        return this.prisma.student.findUnique({
            where:{
                id,
            }
        })
    }

    //Create student
    async createStudent(data:CreateUserDto){
       const student= await this.prisma.student.findUnique({
            where:{
                Email:data.Email,
            }
       })
        if(student){
            return "Student exists"
        } 
        
        return this.prisma.student.create({
            data,
        })
    
    }


    //Update student
    async updateStudent(id:number, data:CreateUserDto){
        const student= await this.prisma.student.findUnique({
            where:{
                Email:data.Email
            }
        })
        if(!student){
            return "This user does not exist"
        }

        return this.prisma.student.Update({
            where:{id},
            data,
        })
    }

    //Delete a student
    async deleteStudent(id:number){
        const student= await this.prisma.student.findUnique({
            where:{
                id,
            }
        })
        if(!student){
            return "This user does not exist"
        }
        return this.prisma.student.delete({
            where:{id}
        })
    }
}
