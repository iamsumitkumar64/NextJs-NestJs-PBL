import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TaskStatusEnum } from "../enums/task-status";
import UserEntity from "./user.entity";

@Entity('tasks')
export default class TasksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    task: string;

    @Column({ type: "varchar" })
    description: string;

    @Column({ type: "enum", enum: TaskStatusEnum })
    status: number;

    @ManyToOne(() => UserEntity, (user) => user.tasks)
    @JoinColumn({ referencedColumnName: "id", name: "user_id" })
    user_id: UserEntity

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}