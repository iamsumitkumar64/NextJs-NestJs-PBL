import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";

@Injectable()
export class RepoService {
    private tasks: taskObject[] = [];

    addTask(task: taskObject) {
        this.tasks.push(task);
    }

    findTask() {
        return this.tasks;
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(curr => curr.id != id);
        return this.tasks;
    }
}