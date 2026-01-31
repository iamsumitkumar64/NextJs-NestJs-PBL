import { Body, Controller, Patch, Req } from "@nestjs/common";
import { UpdateProfileDto } from "./updateprofile.dto";
import { UpdateProfileService } from "./updateprofile.service";
import type { Request } from "express";

@Controller('profile')
export class UpdateProfileController {
    constructor(private readonly updateProfileService: UpdateProfileService) { }

    @Patch()
    async updateProfile(@Req() req: Request, @Body() body: UpdateProfileDto) {
        const response = await this.updateProfileService.updateProfile(req.user, body);
        return response;
    }
}