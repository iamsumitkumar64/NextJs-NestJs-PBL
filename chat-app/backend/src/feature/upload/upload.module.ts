import { Module } from "@nestjs/common";
import UploadController from "./upload.controller";
import { FileUploadModule } from "src/infrastructure/file-upload/file.upload.module";

@Module({
    imports: [FileUploadModule],
    controllers: [UploadController],
})
export default class UploadModule { };