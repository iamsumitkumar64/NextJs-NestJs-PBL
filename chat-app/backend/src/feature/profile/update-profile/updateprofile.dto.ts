import { IsEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    username: string

    @IsOptional()
    @IsStrongPassword()
    password: string
}