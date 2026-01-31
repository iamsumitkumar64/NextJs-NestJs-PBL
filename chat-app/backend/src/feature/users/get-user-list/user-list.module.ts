import { Module } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repository/user.repository";
import { UserListController } from "./user-list.controller";
import { UserListService } from "./user-list.service";

@Module({
    imports: [],
    controllers: [UserListController],
    providers: [UserListService, UserRepository],
    exports: []
})

export class UserListModule { }