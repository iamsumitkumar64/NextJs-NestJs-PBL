import { UserRepository } from "src/infrastructure/repository/user.repository";
import { UpdateProfileDto } from "./updateprofile.dto";
import UserEntity from "src/domain/entities/users.entity";
import { filterObj } from "src/infrastructure/utils/helper";
import { AuthService } from "src/infrastructure/utils/auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateProfileService {
    constructor(private readonly userRepo: UserRepository, private readonly authService: AuthService) { }

    async updateProfile(currentUser: UserEntity, body: UpdateProfileDto) {
        const filteredBody = filterObj(body);
        if (!filteredBody) {
            return { isupdated: false };
        }
        if (filteredBody.password) {
            const hashedPassword = await this.authService.hash(filteredBody.password);
            filteredBody.password = hashedPassword;
        }
        const updateResult = await this.userRepo.updateProfile(currentUser, filteredBody);
        if (updateResult.affected) {
            return { isupdated: true };
        }
        return { isupdated: false };
    }
}