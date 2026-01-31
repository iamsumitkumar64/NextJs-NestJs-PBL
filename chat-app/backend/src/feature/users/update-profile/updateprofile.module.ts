import { Module } from "@nestjs/common";
import { UpdateProfileController } from "./updateprofile.controller";
import { UpdateProfileService } from "./updateprofile.service";
import { AuthService } from "src/infrastructure/utils/auth.service";
import { UserRepository } from "src/infrastructure/repository/user.repository";

@Module({
    imports: [],
    controllers: [UpdateProfileController],
    providers: [UpdateProfileService, UserRepository, AuthService],
    exports: []
})

export class UpdateProfileModule { }