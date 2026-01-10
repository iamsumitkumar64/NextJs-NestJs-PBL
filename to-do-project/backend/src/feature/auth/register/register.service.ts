import { RegisterDto } from "./register.dto";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@Injectable()
export class RegisterService {
    constructor(private usersRepo: UserRepository) { }

    async registerUser(body: RegisterDto) {
        const filteredUser = await this.usersRepo.findUser(body.email);
        if (filteredUser) {
            return "User with Email Already Exists";
        }
        await this.usersRepo.register(body);
        return 'User Registered Success';
    }

}