import { Body, Controller, Delete, Get, Param, Query } from "@nestjs/common";
import { DeleteService } from "./delete.service";
import DeleteDto from "./delete.dto";

@Controller('/task')
export class DeleteController {
    constructor(private readonly deleteService: DeleteService) { }

    @Delete()
    deleteTask(@Query() query: DeleteDto) {
        return this.deleteService.deleteTask(query.id);
    }
}