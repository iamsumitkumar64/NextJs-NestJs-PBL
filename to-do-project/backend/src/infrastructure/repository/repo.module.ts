import { Module } from "@nestjs/common";
import { RepoService } from "./repo.service";

@Module({
    imports: [],
    controllers: [],
    providers: [RepoService],
    exports: [RepoService],
})

export class RepoModule { }