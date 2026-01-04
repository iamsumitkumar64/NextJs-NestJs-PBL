import { Body, Controller, Get, Param, Query } from "@nestjs/common";
import { DeleteService } from "./delete.service";

@Controller('/deleteTask')
export class DeleteController {
    constructor(private readonly deleteService: DeleteService) { }

    @Get(':id')
    deleteTask(@Param() param: { id: number }, @Query() query: { id: number }) {
        return this.deleteService.deleteTask(param.id || query.id);
    }
}