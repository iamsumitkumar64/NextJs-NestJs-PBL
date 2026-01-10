import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { TaskRepository } from "src/infrastructure/repository/task.repository";

@Injectable()
export class DeleteService {
    constructor(private readonly repo: TaskRepository) { }

    deleteTask(id: number): taskObject[] {
        return this.repo.deleteTask(id);
    }
}