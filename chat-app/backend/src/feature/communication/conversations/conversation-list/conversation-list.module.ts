import { Module } from "@nestjs/common";
import { ConversationRepository } from "src/infrastructure/repository/conversation.repository";
import { conversationListController } from "./conversation-list.controller";
import { ConversationListService } from "./conversation-list.service";

@Module({
    imports: [],
    controllers: [conversationListController],
    providers: [ConversationListService, ConversationRepository],
    exports: []
})

export class conversationListModule { }