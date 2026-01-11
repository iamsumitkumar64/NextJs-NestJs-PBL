import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";

export default class DeleteDto {

    @IsNumber()
    @Transform(({ value }) => parseInt(value))
    id: number;
}