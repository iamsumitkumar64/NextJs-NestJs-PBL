import { Module } from "@nestjs/common";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@Module({
    imports: [],
    controllers: [RegisterController],
    providers: [RegisterService, UserRepository],
    exports: [],
})

export class RegisterModule { }