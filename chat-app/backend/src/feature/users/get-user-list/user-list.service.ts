import { UserRepository } from "src/infrastructure/repository/user.repository";
import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";

@Injectable()
export class UserListService {
    constructor(private readonly userRepo: UserRepository) { }

    async getUserList(currentUser: UserEntity) {
        const usersList = await this.userRepo.getUserList(currentUser.id);
        return usersList.length ? { data: usersList } : { data: [] };
    }
}