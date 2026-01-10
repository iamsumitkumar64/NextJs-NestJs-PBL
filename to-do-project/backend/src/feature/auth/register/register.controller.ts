import { Body, Controller, Post } from "@nestjs/common";
import { RegisterDto } from "./register.dto";
import { RegisterService } from "./register.service";

@Controller('/register')
export class RegisterController {
    constructor(private registerService: RegisterService) { }

    @Post()
    async addUser(@Body() body: RegisterDto) {
        return await this.registerService.registerUser(body);
    }
}