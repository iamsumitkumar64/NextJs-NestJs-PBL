import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { LoginDto } from "./login.dto";

@Injectable()
export class LoginService {
    constructor(private usersRepo: UserRepository) { }

    async loginUser(body: LoginDto) {
        const user = await this.usersRepo.find({
            where: {
                email: body.email
            }
        });
        return user.length ? "Login Success" : "User not exists with Email";
    }

}