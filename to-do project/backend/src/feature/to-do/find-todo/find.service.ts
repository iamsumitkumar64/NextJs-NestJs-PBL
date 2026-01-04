import { Injectable } from "@nestjs/common";
import { taskObject } from "src/domain/interfaces/tasks";
import { RepoService } from "src/infrastructure/repository/repo.service";

@Injectable()
export class findService {
    constructor(private readonly repo: RepoService) { }

    findTask(): taskObject[] {
        return this.repo.findTask();
    }
}