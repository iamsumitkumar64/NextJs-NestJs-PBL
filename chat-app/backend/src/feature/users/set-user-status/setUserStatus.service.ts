import { UserRepository } from "src/infrastructure/repository/user.repository";
import UserEntity from "src/domain/entities/users.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SetUserStatusService {
    constructor(private readonly userRepo: UserRepository) { }

    async setUserStatus(currentUser: UserEntity, status: boolean) {
        return this.userRepo.setUserStatus(currentUser.id, status)
    }
}