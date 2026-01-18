import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { LoginDto } from "./login.dto";
import { AuthService } from "../../../infrastructure/utils/auth.service";

@Injectable()
export class LoginService {
    constructor(private readonly usersRepo: UserRepository, private readonly authService: AuthService) { }

    async loginUser(body: LoginDto) {
        const user = await this.usersRepo.find({
            where: {
                email: body.email
            }
        });
        if (!user.length) {
            throw new HttpException('User not exists with Email', HttpStatus.BAD_REQUEST);
        }
        const isMacthed = await this.authService.compare(body.password, user[0].password);
        if (!isMacthed) {
            throw new HttpException('Password not matched', HttpStatus.BAD_REQUEST);
        }
        const token = await this.authService.generateJwtToken(body.email);
        const response = {
            "access_token": token,
        };
        return response;
    }

}