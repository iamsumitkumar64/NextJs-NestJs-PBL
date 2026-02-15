import { Module } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { SetUserStatusService } from "./setUserStatus.service";
import { SetUserStatusController } from "./setUserStatus.controller";

@Module({
    imports: [],
    controllers: [SetUserStatusController],
    providers: [SetUserStatusService, UserRepository],
    exports: []
})

export class SetUserStatusModule { }