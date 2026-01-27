import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserEntity from "./users.entity";
import MessagesEntity from "./messages.entity";
import MembersEntity from "./members.entity";

@Entity('conversations')
export default class ConversationsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, (user) => user.conversations)
    @JoinColumn({ name: "creator_id" })
    creator_id: UserEntity

    @OneToMany(() => MessagesEntity, (mess) => mess.conversation_id)
    message_id: MessagesEntity[]

    @OneToMany(() => MembersEntity, (mem) => mem.conversation_id)
    members: MembersEntity[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}