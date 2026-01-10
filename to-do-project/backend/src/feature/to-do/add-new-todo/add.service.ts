import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { TaskRepository } from "src/infrastructure/repository/task.repository";
import AddDto from "./add.dto";

@Injectable()
export class AddService {
    constructor(private readonly repo: TaskRepository) { }

    addTask(newTaskToAdd: AddDto): string {
        this.repo.addTask(newTaskToAdd);
        return 'Added';
    }
}