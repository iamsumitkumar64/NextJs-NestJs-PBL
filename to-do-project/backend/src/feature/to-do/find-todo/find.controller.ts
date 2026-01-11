import { Body, Controller, Get, Query } from "@nestjs/common";
import { findService } from "./find.service";

@Controller('/task')
export class findController {
    constructor(private readonly findService: findService) { }

    @Get()
    findTask() {
        return this.findService.findTask()
    }
}