import { ConversationRepository } from "src/infrastructure/repository/conversation.repository";
import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";

@Injectable()
export class ConversationListService {
    constructor(private readonly conversationRepo: ConversationRepository) { }

    async getconversationList(current_user: UserEntity) {
        let conversationsList = await this.conversationRepo.getconversationList(current_user.id);
        if (conversationsList.length) {
            conversationsList = conversationsList.map(conv => (
                {
                    ...conv,
                    members: conv.members.filter(
                        m => m.user_id.id !== current_user.id
                    )
                }
            ));
        }
        return conversationsList.length ? { data: conversationsList } : { data: [] };
    }
}