import { Module } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";

@Module({
    imports: [],
    controllers: [LoginController],
    providers: [UserRepository, LoginService],
    exports: []
})

export class LoginModule { }