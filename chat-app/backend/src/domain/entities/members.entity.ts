import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserEntity from "./users.entity";
import ConversationsEntity from "./conversations.entity";

@Entity('members')
export default class MembersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, (user) => user.members)
    @JoinColumn({ name: "user_id" })
    user_id: UserEntity

    @ManyToOne(() => ConversationsEntity, (conver) => conver.members)
    @JoinColumn({ name: "conversation_id" })
    conversation_id: ConversationsEntity

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}