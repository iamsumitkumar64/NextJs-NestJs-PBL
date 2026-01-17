import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./login.dto";
import { LoginService } from "./login.service";

@Controller('/login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post()
    async loginUser(@Body() body: LoginDto) {
        return this.loginService.loginUser(body);
    }

}