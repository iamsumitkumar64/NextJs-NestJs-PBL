import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { TaskRepository } from "src/infrastructure/repository/task.repository";
import AddDto from "./add.dto";

@Injectable()
export class AddService {
    constructor(private readonly taskRepo: TaskRepository) { }

    addTask(newTaskToAdd: AddDto): string {
        this.taskRepo.addTask(newTaskToAdd);
        return 'Added';
    }
}