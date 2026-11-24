import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { SignUserDto } from '../../dto/signIn.dto.js';


@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService){}

    signUp(){

    }
    signIn(data:SignUserDto){
        
    }
}
