import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { TaskRepository } from "src/infrastructure/repository/task.repository";
import AddDto from "./add.dto";

@Injectable()
export class AddService {
    constructor(private readonly taskRepo: TaskRepository) { }

   async addTask(newTaskToAdd: AddDto) {
        const task=await this.taskRepo.addTask(newTaskToAdd);
        return {
            message:"Task has been added",
            task
        };
    }
}