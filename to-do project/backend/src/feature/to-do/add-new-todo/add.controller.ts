import { Body, Controller, Post } from "@nestjs/common";
import { AddService } from "./add.service";
import type { taskObject } from "src/domain/interfaces/tasks";

@Controller('/addTask')
export class AddController {
    constructor(private readonly addService: AddService) { }

    @Post()
    addTask(@Body() newTaskToAdd: taskObject) {
        return this.addService.addTask(newTaskToAdd)
    }
}