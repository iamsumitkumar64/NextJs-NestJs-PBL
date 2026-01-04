import { Module } from "@nestjs/common";
import { DeleteController } from "./delete.controller";
import { RepoModule } from "src/infrastructure/repository/repo.module";
import { DeleteService } from "./delete.service";

@Module({
    imports: [RepoModule],
    controllers: [DeleteController],
    providers: [DeleteService],
    exports: [],
})

export class DeleteModule { }