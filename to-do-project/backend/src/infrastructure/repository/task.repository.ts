import { Injectable } from "@nestjs/common";
import TasksEntity from "src/domain/entities/tasks.entity";
import { TaskStatusEnum } from "src/domain/enums/task-status";
import { taskObject } from "src/domain/interfaces/tasks";
import AddDto from "src/feature/to-do/add-new-todo/add.dto";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class TaskRepository extends Repository<TasksEntity> {
    // private tasks: taskObject[] = [];
    constructor(private dataSource: DataSource) {
        super(TasksEntity, dataSource.createEntityManager())
    }

    async addTask(todo: AddDto) {
        const task = this.create(todo);
        return await this.save(task);
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