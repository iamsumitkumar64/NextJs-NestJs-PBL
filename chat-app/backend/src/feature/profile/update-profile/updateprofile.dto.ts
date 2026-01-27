import { IsEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    username: string

    @IsStrongPassword()
    password: string
}