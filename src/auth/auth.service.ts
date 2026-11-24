import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { SignUserDto } from '../../dto/signIn.dto.js';
import { signInUserDto } from '../../dto/signUp.Dto.js';


@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService){}

    signUp(data:signInUserDto){
        
    }
    async signIn(data:SignUserDto){
        const user= await this.prisma.user.findUnique({
            where:{
                Email:data.email
            }
        })
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const passwordMatches=compare(user.password,data.password)
        if (!passwordMatches) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user
    }
}
