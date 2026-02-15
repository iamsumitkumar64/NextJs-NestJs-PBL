import { Body, Controller, Patch, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { SetUserStatusService } from "./setUserStatus.service";
import { SetUserStatusDTO } from "./setUserStatus.dto";

@Controller('user/status')
export class SetUserStatusController {
    constructor(private readonly setUserStatusS: SetUserStatusService) { }

    @Post()
    async setUserStatus(@Req() req: Request, @Body() body: SetUserStatusDTO) {
        const response = await this.setUserStatusS.setUserStatus(req.user, body.status)
        return response;
    }
}