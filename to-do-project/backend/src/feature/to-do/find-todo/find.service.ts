import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { TaskRepository } from "src/infrastructure/repository/task.repository";

@Injectable()
export class findService {
    constructor(private readonly repo: TaskRepository) { }

    async findTask() {
        return await this.repo.findTask();
    }
}