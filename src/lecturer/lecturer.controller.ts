import { Controller,Get,Post,Patch,Param,Body,Delete, ParseIntPipe } from '@nestjs/common';
import { LecturerService } from './lecturer.service.js';
import { CreateLecturerDto } from '../../dto/createLecturer.dto.js';

@Controller('lecturer')
export class LecturerController {
    constructor(private lecturerService:LecturerService){}

    //Get All lecturers
    @Get()
    findAll(){
        return this.lecturerService.getAllLecturers();
    }
    //Get a single lecturer
    @Get()
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.lecturerService.getSingleLecturer(id);
    }

    //Create a Lecturer
    @Post()
    createLecturer(@Body() data:CreateLecturerDto){
        return this.lecturerService.createLecturer(data)
    }


    //Update Lecturer
    @Patch()
    updateLecturer(@Param('id',ParseIntPipe) id:number, @Body() data:CreateLecturerDto){
        return this.lecturerService.updateLecturer(id,data)
    }

    //Delete a Lecturer
    @Delete()
    deleteLecturer(@Param('id',ParseIntPipe) id:number){
        return this.lecturerService.deleteLecturer(id)
    }
}
