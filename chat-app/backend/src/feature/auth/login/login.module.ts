import { Module } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { AuthService } from "../../../infrastructure/utils/auth.service";

@Module({
    imports: [],
    controllers: [LoginController],
    providers: [UserRepository, LoginService, AuthService],
    exports: []
})

export class LoginModule { }