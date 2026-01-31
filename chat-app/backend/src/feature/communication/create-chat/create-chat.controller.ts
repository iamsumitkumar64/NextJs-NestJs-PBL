import { Body, Controller, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { CreateChatDto } from './create-chat.dto';
import { CreateChatService } from './create-chat.service';

@Controller('/chat')
export class CreateChatController {
    constructor(private readonly createChatService: CreateChatService) { }

    @Post()
    async createDualConversation(@Req() req: Request, @Body() body: CreateChatDto) {
        await this.createChatService.createDualConversation(req.user, body);
    }
}