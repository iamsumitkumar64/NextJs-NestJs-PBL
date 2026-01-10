import { Module } from "@nestjs/common";
import { DeleteController } from "./delete.controller";
import { DeleteService } from "./delete.service";
import { TaskRepository } from "src/infrastructure/repository/task.repository";

@Module({
    imports: [],
    controllers: [DeleteController],
    providers: [DeleteService,TaskRepository],
    exports: [],
})

export class DeleteModule { }