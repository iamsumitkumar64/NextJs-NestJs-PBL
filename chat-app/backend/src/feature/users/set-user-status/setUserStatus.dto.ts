import { IsBoolean, IsEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class SetUserStatusDTO {
    @IsBoolean()
    status: boolean
}