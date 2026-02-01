import { Module } from "@nestjs/common";
import { MessageRepository } from "src/infrastructure/repository/message.repository";
import { MessageListController } from "./message-list.controller";
import { MessageListService } from "./message-list.service";

@Module({
    imports: [],
    controllers: [MessageListController],
    providers: [MessageListService, MessageRepository],
    exports: []
})

export class MessageListModule { }