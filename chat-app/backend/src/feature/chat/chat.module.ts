import { Module } from "@nestjs/common";
import { CreateChatModule } from "./create-chat/create-chat.module";

@Module({
    imports: [CreateChatModule],
    controllers: [],
    providers: [],
    exports: []
})

export class ChatModule { }