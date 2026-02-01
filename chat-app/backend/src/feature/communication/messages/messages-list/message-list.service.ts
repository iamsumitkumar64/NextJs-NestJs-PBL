import { MessageRepository } from "src/infrastructure/repository/message.repository";
import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";

@Injectable()
export class MessageListService {
    constructor(private readonly messageRepo: MessageRepository) { }

    async getmessageList(current_user: UserEntity) {
        const messagesList = await this.messageRepo.getmessageList(current_user.id);
        return messagesList.length ? { data: messagesList } : { data: [] };
    }
}