import { Controller,Get,Post,Patch,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { DepartmentService } from './department.service.js';
import { CreateDepartmentDto } from '../../dto/createDepartment.dto.js';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService:DepartmentService){}

    //Find all departments
    @Get()
    findAll(){
        return this.departmentService.getAllDepartments();
    }
    //Find a single department
    @Get()
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.departmentService.getSingleDepartment(id)
    }

    //Create a department
    @Post()
    createDepartment(@Body() data:CreateDepartmentDto){
        return this.departmentService.createDepartment(data);
    }

    //Update a Department

    @Patch()
    updateDepartment(@Param('id', ParseIntPipe) id:number, @Body() data:CreateDepartmentDto){
        return this.departmentService.updateDepartment(id,data)
    }

    //Delete a department
    @Delete()
    deleteDepartment(@Param('id',ParseIntPipe) id:number){
        return this.departmentService.deleteDepartment(id)
    }
}
