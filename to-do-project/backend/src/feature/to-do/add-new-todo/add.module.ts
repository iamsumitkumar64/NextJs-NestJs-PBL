import { Module } from "@nestjs/common";
import { AddController } from "./add.controller";
import { AddService } from "./add.service";
import { TaskRepository } from "src/infrastructure/repository/task.repository";

@Module({
    imports: [],
    controllers: [AddController],
    providers: [AddService, TaskRepository],
    exports: [],
})

export class AddModule { }