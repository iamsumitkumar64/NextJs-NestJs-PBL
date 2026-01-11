import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TaskStatusEnum } from "../enums/task-status";

@Entity('tasks')
export default class TasksEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    task: string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "enum", enum: TaskStatusEnum })
    status: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}