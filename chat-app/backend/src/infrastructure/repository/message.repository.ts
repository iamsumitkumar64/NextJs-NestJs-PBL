import { Injectable } from "@nestjs/common";
import MessagesEntity from "src/domain/entities/messages.entity";
import { DataSource, Like, Repository } from "typeorm";

@Injectable()
export class MessageRepository extends Repository<MessagesEntity> {
    constructor(private readonly datasource: DataSource) {
        super(MessagesEntity, datasource.createEntityManager());
    }

    async insertMessage(sender_id: number, conversation_id: number, message: string) {
        const messages = this.create({
            conversation_id: { id: conversation_id },
            sender_id: { id: sender_id },
            message: message
        });
        return await this.save(messages);
    }

    async getmessageList(currentUser_id: number, conversation_id: number) {
        const patterns = [
            Like(`${currentUser_id}_%`),
            Like(`%_${currentUser_id}`),
        ];
        return await this.find({
            relations: {
                sender_id: true
            },
            where: [
                {
                    conversation_id: {
                        id: conversation_id,
                        dual_user_ids: Like(`${currentUser_id}_%`)
                    }
                },
                {
                    conversation_id: {
                        id: conversation_id,
                        dual_user_ids: Like(`%_${currentUser_id}`)
                    }
                }
            ],
            select: {
                id: true,
                message: true,
                created_at: true,
                sender_id: { id: true }
            }
        });
    }
}