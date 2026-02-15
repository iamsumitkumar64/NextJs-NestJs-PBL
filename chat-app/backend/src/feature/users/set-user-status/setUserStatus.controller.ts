import { Body, Controller, Patch, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { SetUserStatusService } from "./setUserStatus.service";
import UserEntity from "src/domain/entities/users.entity";
import { SetUserStatusDTO } from "./setUserStatus.dto";

@Controller('user/status')
export class SetUserStatusController {
    constructor(private readonly updateProfileService: SetUserStatusService) { }

    @Post()
    async updateProfile(@Req() req: Request, @Body() body: SetUserStatusDTO) {
        const response = await this.updateProfileService.setUserStatus(req.user, body.status)
        return response;
    }
}