import { Body, Controller, Post } from "@nestjs/common";
import { AddService } from "./add.service";
import type { taskObject } from "src/domain/interfaces/tasks";
import AddDto from "./add.dto";

@Controller('/task')
export class AddController {
    constructor(private readonly addService: AddService) { }

    @Post()
    addTask(@Body() newTaskToAdd: AddDto) {
        return this.addService.addTask(newTaskToAdd)
    }
}