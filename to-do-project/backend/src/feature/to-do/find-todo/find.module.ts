import { Module } from "@nestjs/common";
import { findController } from "./find.controller";
import { findService } from "./find.service";
import { TaskRepository } from "src/infrastructure/repository/task.repository";

@Module({
    imports: [],
    controllers: [findController],
    providers: [findService, TaskRepository],
    exports: [],
})

export class FindModule { }