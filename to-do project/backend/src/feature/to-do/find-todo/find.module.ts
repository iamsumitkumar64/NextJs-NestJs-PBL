import { Module } from "@nestjs/common";
import { findController } from "./find.controller";
import { RepoModule } from "src/infrastructure/repository/repo.module";
import { findService } from "./find.service";

@Module({
    imports: [RepoModule],
    controllers: [findController],
    providers: [findService],
    exports: [],
})

export class findModule { }