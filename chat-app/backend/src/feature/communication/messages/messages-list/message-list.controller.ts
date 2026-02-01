import { Controller, Get, Req } from "@nestjs/common";
import type { Request } from "express";
import { MessageListService } from "./message-list.service";

@Controller('message')
export class MessageListController {
    constructor(private readonly getmessageListService: MessageListService) { }

    @Get()
    async getmessages(@Req() req: Request) {
        const response = await this.getmessageListService.getmessageList(req.user);
        return response;
    }
}