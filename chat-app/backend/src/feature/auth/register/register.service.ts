import { RegisterDto } from "./register.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { AuthService } from "../../../infrastructure/utils/auth.service";

@Injectable()
export class RegisterService {
    constructor(private readonly usersRepo: UserRepository, private readonly authService: AuthService) { }

    async registerUser(body: RegisterDto) {
        const filteredUser = await this.usersRepo.findUser(body.email);
        if (filteredUser) {
            throw new HttpException('User Exists with this email', HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await this.authService.hash(body.password);
        body.password = hashedPassword;
        await this.usersRepo.register(body);
        return { is_created: true };
    }
}