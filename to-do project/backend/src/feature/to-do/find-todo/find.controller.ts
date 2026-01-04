import { Body, Controller, Get } from "@nestjs/common";
import { findService } from "./find.service";

@Controller('/findTask')
export class findController {
    constructor(private readonly findService: findService) { }

    @Get()
    findTask() {
        return this.findService.findTask()
    }
}