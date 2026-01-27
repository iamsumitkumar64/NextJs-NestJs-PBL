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

    async createConversation(user: UserEntity, body: CreateChatDto) {
        const conversation = this.create
        (
            {
                creator_id: { id: user.id },
                // members: body.receiver_id
            }
        );
        return await this.save(conversation);
    }

    async findConversation(id: number) {
        const conversation = await this.find({
            where: {
                id: id
            }
        });
        return conversation.length ? conversation : null;
    }
}
