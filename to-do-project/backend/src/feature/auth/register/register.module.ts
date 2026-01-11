import { Module } from "@nestjs/common";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { AuthService } from "../../../infrastructure/utils/auth.service";

@Module({
    imports: [],
    controllers: [RegisterController],
    providers: [RegisterService, UserRepository, AuthService],
    exports: [],
})

export class RegisterModule { }