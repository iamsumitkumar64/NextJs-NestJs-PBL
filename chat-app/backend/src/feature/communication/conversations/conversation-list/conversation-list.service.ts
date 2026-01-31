import { ConversationRepository } from "src/infrastructure/repository/conversation.repository";
import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";

@Injectable()
export class ConversationListService {
    constructor(private readonly conversationRepo: ConversationRepository) { }

    async getconversationList(current_user: UserEntity) {
        const conversationsList = await this.conversationRepo.getconversationList(current_user.id);
        return conversationsList.length ? { data: conversationsList } : { data: [] };
    }
}