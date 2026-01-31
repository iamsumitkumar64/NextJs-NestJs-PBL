import { Controller, Get, Req } from "@nestjs/common";
import type { Request } from "express";
import { ConversationListService } from "./conversation-list.service";

@Controller('conversation')
export class conversationListController {
    constructor(private readonly getconversationListService: ConversationListService) { }

    @Get()
    async getConversations(@Req() req: Request) {
        const response = await this.getconversationListService.getconversationList(req.user);
        return response;
    }
}