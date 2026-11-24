import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateLecturerDto } from '../../dto/createLecturer.dto.js';

@Injectable()
export class LecturerService {
    constructor(private prisma:PrismaService){}
    //Get all lecturers
    getAllLecturers(){
        return this.prisma.lecturer.findMany();
    }

    //Get a Single lecturer
    getSingleLecturer(id:number){
        return this.prisma.lecturer.findUnique({
            where:{id}
        })
    }

    //Create a Lecturer
    async createLecturer(data:CreateLecturerDto){
        const Lecturer= await this.prisma.lecturer.findUnique({
            where:{
                Email:data.Email,
            }
        })
        if(Lecturer){
            return "The Lecturer exists"
        }

        return this.prisma.lecturer.create({
            data,
        })
    }


    //Update a Lecturer
    async updateLecturer(id:number, data:CreateLecturerDto){
        const Lecturer= await this.prisma.lecturer.findUnique({
            where:{id}
        })
        if(!Lecturer){
            return "The Lecturer does not exist"
        }

        return this.prisma.lecturer.update({
            where:{id},
            data,
        })
    }



    //Delete a Lecturer
    async deleteLecturer(id:number){
        const Lecturer= await this.prisma.Lecturer.findUnique({
            where:{id}
        })
        if(!Lecturer){
            return "Lecturer does not exist"
        }
        return this.prisma.lecturer.delete({
            where:{id}
        })
    }
}
