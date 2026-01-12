import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TasksEntity from "./tasks.entity";

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

    @OneToMany(() => TasksEntity, (task) => task.user_id)
    tasks: TasksEntity[]

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}