import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { AuthService } from "../utils/auth.service";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly jwtService: AuthService,
        private readonly userRepo: UserRepository
    ) { }

    async use(req: Request, res: Response, next: (error?: any) => void) {
        const isAuthenticated = await this.jwtService.verifyJwtToken(req.headers.authorization ?? "");
        if (!isAuthenticated) {
            throw new HttpException("Invalid Access", HttpStatus.UNAUTHORIZED);
        }
        const isUserExists = await this.userRepo.findUser(isAuthenticated.email);

        if (!isUserExists) {
            throw new HttpException("User Not exists", HttpStatus.UNAUTHORIZED);
        } else if (isUserExists && !isUserExists.is_active) {
            throw new HttpException("User Deactivated Account", HttpStatus.UNAUTHORIZED);
        }
        next();
    }
}