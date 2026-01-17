import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async hash(password: string) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    async compare(password: string, storedHash: string) {
        const isMatch = await bcrypt.compare(password, storedHash);
        return isMatch;
    }

    async generateJwtToken(userEmail: string) {
        const payload = { email: userEmail };
        return await this.jwtService.signAsync(payload);
    }

    async verifyJwtToken(access_token: string) {
        return this.jwtService.verifyAsync(access_token);
    }
}