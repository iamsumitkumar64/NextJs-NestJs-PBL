import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";

export default class DeleteDto {

    @IsNumber()
    id: number;
}