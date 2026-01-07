import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('task')
export default class TasksEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    task: string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "int" })
    status: number

    @Column({ type: "boolean" })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}