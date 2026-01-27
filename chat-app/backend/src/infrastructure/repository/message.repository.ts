import { Injectable } from "@nestjs/common";
import MessagesEntity from "src/domain/entities/messages.entity";
import { DataSource, Repository } from "typeorm";

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
}