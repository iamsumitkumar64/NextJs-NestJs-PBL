import { Controller, Get, Req } from "@nestjs/common";
import { UserListService } from "./user-list.service";
import type { Request } from "express";

@Controller('users')
export class UserListController {
    constructor(private readonly getUserListService: UserListService) { }

    @Get()
    async updateProfile(@Req() req: Request) {
        const response = await this.getUserListService.getUserList(req.user);
        return response;
    }
}