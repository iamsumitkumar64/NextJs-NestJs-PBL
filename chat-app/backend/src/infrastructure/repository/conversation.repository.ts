import { Injectable } from '@nestjs/common';
import ConversationsEntity from 'src/domain/entities/conversations.entity';
import UserEntity from 'src/domain/entities/users.entity';
import { CreateChatDto } from 'src/feature/chat/create-chat/create-chat.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ConversationRepository extends Repository<ConversationsEntity> {
    constructor(private readonly datasource: DataSource) {
        super(ConversationsEntity, datasource.createEntityManager());
    }

    async createDualConversation(user: UserEntity, body: CreateChatDto) {
        const conversation = this.create
            (
                {
                    creator_id: { id: user.id },
                    dual_user_ids: user.id + '_' + body.receiver_id
                }
            );
        return await this.save(conversation);
    }

    async findConversation(id: number, sender_id: number, receiver_id: number) {
        const conversation = await this.find({
            where: [
                { id, dual_user_ids: sender_id + '_' + receiver_id },
                { id, dual_user_ids: receiver_id + '_' + sender_id },]
        });
        return conversation.length ? conversation[0] : null;
    }

    async findConversationUsingUsers(sender_id: number, receiver_id: number) {
        const conversation = await this.find({
            where: [
                { dual_user_ids: sender_id + '_' + receiver_id },
                { dual_user_ids: receiver_id + '_' + sender_id },
            ]
        });
        return conversation.length ? conversation[0] : null;
    }
}
