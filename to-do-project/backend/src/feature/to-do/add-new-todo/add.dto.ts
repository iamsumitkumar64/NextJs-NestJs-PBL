import { IsNumber, IsString, Length, Max, Min } from "class-validator";

export default class AddDto {
    @IsString()
    @Length(1, 15)
    task: string;

    @IsString()
    @Length(1, 50)
    description: string;
}