import { IsString, IsNumber } from "class-validator";

export class chatSocketDto {
    @IsString()
    message: string

    @IsNumber()
    receiver_id: number

    @IsNumber()
    conversation_id: number
}