import { RegisterDto } from "./register.dto";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { AuthService } from "../../../infrastructure/utils/auth.service";

@Injectable()
export class RegisterService {
    constructor(private readonly usersRepo: UserRepository, private readonly authService: AuthService) { }

    async registerUser(body: RegisterDto) {
        const filteredUser = await this.usersRepo.findUser(body.email);
        if (filteredUser) {
            return "User with Email Already Exists";
        }
        const hashedPassword = await this.authService.hash(body.password);
        body.password = hashedPassword;
        await this.usersRepo.register(body);
        return 'User Registered Success';
    }
}