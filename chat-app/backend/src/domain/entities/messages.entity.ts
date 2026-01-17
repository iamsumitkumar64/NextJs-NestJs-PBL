import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserEntity from "./users.entity";
import ConversationsEntity from "./conversations.entity";

@Entity('messages')
export default class MessagesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    message: string

    @ManyToOne(() => UserEntity, (user) => user.messages)
    sender_id: UserEntity

    @ManyToOne(() => ConversationsEntity, (conver) => conver.message_id)
    conversation_id: ConversationsEntity

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}