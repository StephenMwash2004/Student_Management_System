import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { SignUserDto } from '../../dto/signIn.dto.js';
import { signInUserDto } from '../../dto/signUp.Dto.js';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signUp')
    signUp(@Body() data:signInUserDto){
        return this.authService.signUp();
    }

    @Post('signIn')
    signIn(@Body() data:SignUserDto){
        return this.authService.signIn(data);
    }
}
