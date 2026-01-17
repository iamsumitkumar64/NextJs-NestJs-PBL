import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import ConversationsEntity from "./conversations.entity";
import MessagesEntity from "./messages.entity";
import MembersEntity from "./members.entity";

@Entity('users')
export default class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    username: string

    @Column({ type: "varchar" })
    email: string

    @Column({ type: "varchar" })
    password: string

    @Column({ type: "boolean", default: true })
    is_active: boolean;

    @Column({ type: "boolean", default: true })
    is_online: boolean;

    @Column({ type: "timestamp", nullable: true })
    last_seen_at: Date;

    @OneToMany(() => ConversationsEntity, (comm) => comm.creator_id)
    conversations: ConversationsEntity[]

    @OneToMany(() => MessagesEntity, (mess) => mess.sender_id)
    messages: MessagesEntity[]

    @OneToMany(() => MembersEntity, (mess) => mess.user_id)
    members: MembersEntity[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}