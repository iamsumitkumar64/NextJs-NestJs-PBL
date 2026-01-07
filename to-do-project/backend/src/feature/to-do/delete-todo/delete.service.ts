import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { RepoService } from "src/infrastructure/repository/repo.service";

@Injectable()
export class DeleteService {
    constructor(private readonly repo: RepoService) { }

    deleteTask(id: number): taskObject[] {
        return this.repo.deleteTask(id);
    }
}