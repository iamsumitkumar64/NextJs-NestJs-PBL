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
        const token = req.headers.Authorization || req.headers.authorization;

        //check token header
        if (!token || Array.isArray(token)) {
            throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
        }

        //check user's token authentication
        const isAuthenticated = await this.jwtService.verifyJwtToken(token ?? '');
        if (!isAuthenticated) {
            throw new HttpException("Invalid Access", HttpStatus.UNAUTHORIZED);
        }

        //check user refernce in DB
        const isUserExists = await this.userRepo.findUser(isAuthenticated.email);

        if (!isUserExists) {
            throw new HttpException("User Not exists", HttpStatus.UNAUTHORIZED);
        } else if (isUserExists && !isUserExists.is_active) {
            throw new HttpException("User Deactivated Account", HttpStatus.UNAUTHORIZED);
        }

        //mutate user in Req
        req.user = isUserExists;
        next();
    }
}