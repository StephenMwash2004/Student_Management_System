import { Controller,Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signUp')
    signUp(@Body() data:any){
        return this.authService.signUp();
    }

    @Post('signIn')
    signIn(@Body() data:any){
        return this.authService.signIn(data);
    }
}
