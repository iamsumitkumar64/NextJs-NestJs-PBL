import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConversationRepository } from 'src/infrastructure/repository/conversation.repository';
import { CreateChatDto } from './create-chat.dto';
import UserEntity from 'src/domain/entities/users.entity';
import { MemberRepository } from 'src/infrastructure/repository/members.repository';
import { MessageRepository } from 'src/infrastructure/repository/message.repository';

@Injectable()
export class CreateChatService {
    constructor(
        private readonly conversationRepo: ConversationRepository,
        private readonly memberRepo: MemberRepository,
        private readonly messageRepo: MessageRepository,
    ) { }

    async createDualConversation(user: UserEntity, conversationInstance: CreateChatDto) {
        let conversation_id = conversationInstance?.conversation_id;

        if (!conversationInstance.conversation_id) {
            //check if both user had conversation before
            const isConversationExists = await this.conversationRepo.findConversationUsingUsers(user.id, conversationInstance.receiver_id);

            if (!isConversationExists) {
                //create conversation if not sent
                const newConversation = await this.conversationRepo.createDualConversation(user, conversationInstance);
                conversation_id = newConversation.id;

                //insert both members
                await this.memberRepo.insertMember(user.id, conversation_id);
                await this.memberRepo.insertMember(conversationInstance.receiver_id, conversation_id);
            }
            else {
                conversation_id = isConversationExists?.id;
            }
        } else {
            //check is conversation already valid or not
            const validConversation = await this.conversationRepo.findConversation(conversation_id, user.id, conversationInstance.receiver_id);
            if (!validConversation) {
                throw new HttpException("Invalid Conversation", HttpStatus.BAD_REQUEST);
            }
        }

        //insert messages
        const inserted_message = await this.messageRepo.insertMessage(user.id, conversation_id, conversationInstance.message);

        return {
            message: "Message Sent Success",
            conversation_id,
            inserted_message
        };
    }
}