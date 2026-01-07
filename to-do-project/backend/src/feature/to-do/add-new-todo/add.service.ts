import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { RepoService } from "src/infrastructure/repository/repo.service";
import AddDto from "./add.dto";

@Injectable()
export class AddService {
    constructor(private readonly repo: RepoService) { }

    addTask(newTaskToAdd: AddDto): string {
        this.repo.addTask(newTaskToAdd);
        return 'Added';
    }
}