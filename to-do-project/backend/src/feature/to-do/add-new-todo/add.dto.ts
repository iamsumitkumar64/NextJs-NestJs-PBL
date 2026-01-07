import { IsNumber, IsString, Length, Max, Min } from "class-validator";

export default class AddDto {
    @IsNumber()
    id: number;

    @IsString()
    @Length(1, 15)
    task: string;

    @IsString()
    @Length(1, 50)
    description: string;

    @IsNumber()
    @Min(1)
    @Max(3)
    status: number;
}