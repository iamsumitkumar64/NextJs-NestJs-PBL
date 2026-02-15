import { Module } from "@nestjs/common";
import { CreateChatService } from "./create-chat.service";
import { CreateChatController } from "./create-chat.controller";
import { ConversationRepository } from "src/infrastructure/repository/conversation.repository";
import { MemberRepository } from "src/infrastructure/repository/members.repository";
import { MessageRepository } from "src/infrastructure/repository/message.repository";
import { SocketModule } from "src/infrastructure/socket/socket.module";

@Module({
    imports: [SocketModule],
    controllers: [CreateChatController],
    providers: [CreateChatService, ConversationRepository, MemberRepository, MessageRepository],
    exports: []
})

export class CreateChatModule { }