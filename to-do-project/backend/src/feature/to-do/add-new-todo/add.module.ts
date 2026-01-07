import { Module } from "@nestjs/common";
import { AddController } from "./add.controller";
import { RepoModule } from "src/infrastructure/repository/repo.module";
import { AddService } from "./add.service";

@Module({
    imports: [RepoModule],
    controllers: [AddController],
    providers: [AddService],
    exports: [],
})

export class AddModule { }