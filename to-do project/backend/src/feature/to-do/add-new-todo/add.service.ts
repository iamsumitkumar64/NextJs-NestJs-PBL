import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { RepoService } from "src/infrastructure/repository/repo.service";

@Injectable()
export class AddService {
    constructor(private readonly repo: RepoService) { }

    addTask(newTaskToAdd: taskObject): string {
        this.repo.addTask(newTaskToAdd);
        return 'Added';
    }
}