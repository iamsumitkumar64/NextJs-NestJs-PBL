import { Module } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { SetUserStatusService } from "./setUserStatus.service";

@Module({
    imports: [],
    controllers: [SetUserStatusModule],
    providers: [SetUserStatusService, UserRepository],
    exports: []
})

export class SetUserStatusModule { }