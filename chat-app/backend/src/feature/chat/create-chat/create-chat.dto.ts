import { IsEmpty, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateChatDto {
    @IsOptional()
    @IsNumber()
    conversation_id: number

    @IsString()
    message: string

    @IsNumber()
    receiver_id: number
}