import { Injectable } from "@nestjs/common";
import TasksEntity from "src/domain/entities/tasks.entity";
import { TaskStatusEnum } from "src/domain/enums/task-status";
import { taskObject } from "src/domain/interfaces/tasks";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TaskRepository extends Repository<TasksEntity> {
    // private tasks: taskObject[] = [];
    constructor(private dataSource: DataSource) {
        super(TasksEntity, dataSource.createEntityManager())
    }

    async addTask(todo: taskObject) {
        const task = this.create(todo);
        console.log(task)
        await this.save(task);
        return task;
    }

    async findTask() {
        return await this.find({});
    }

    async deleteTask(id: number) {
        const task = await this.update(
            { id, },
            { status: TaskStatusEnum.Deleted }
        );
        return task;
    }
}