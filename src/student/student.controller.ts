import { Controller, Get,Body,Param,Post,Patch,Delete, ParseIntPipe} from '@nestjs/common';
import { StudentService } from './student.service.js';
import { CreateUserDto } from '../../dto/createUser.dto.js';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}

    @Get()
    findAll(){
        return this.studentService.getAllStudents();
    }
    //Get a Single Student
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.studentService.getById(id);
    }

    //Create a Student

    @Post()
    createStudent(@Body() data:CreateUserDto){
        return this.studentService.createStudent(data)
    }

    //Update a Student

    @Patch(':id')
    updateStudent(@Param('id',ParseIntPipe) id: number, @Body() data:CreateUserDto){
        return this.studentService.updateStudent(id,data);
    }

    //Delete a student

    @Delete(':id')
    deleteStudent(@Param('id',ParseIntPipe) id: number){
        return this.studentService.deleteStudent(id);
    }
}
