import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class RegisterDto {
    @IsString()
    username: string

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}