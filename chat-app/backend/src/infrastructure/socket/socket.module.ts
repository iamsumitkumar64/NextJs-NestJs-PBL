import { Module } from "@nestjs/common";
import { SocketService } from "./socket.service";
import { SetUserStatusModule } from "src/feature/users/set-user-status/setUserStatus.module";
import { AuthService } from "../utils/auth.service";
import { UserRepository } from "../repository/user.repository";

@Module({
    imports: [SetUserStatusModule],
    controllers: [],
    providers: [SocketService, UserRepository, AuthService],
    exports: [SocketService],
})

export class SocketModule { }