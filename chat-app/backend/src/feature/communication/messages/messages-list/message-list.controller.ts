import { Controller, Get, Param, Req } from "@nestjs/common";
import type { Request } from "express";
import { MessageListService } from "./message-list.service";

@Controller('message')
export class MessageListController {
    constructor(private readonly getmessageListService: MessageListService) { }

    @Get(":id")
    async getmessages(@Req() req: Request, @Param("id") conversation_id: number) {
        return await this.getmessageListService.getmessageList(req.user, conversation_id);
    }
}