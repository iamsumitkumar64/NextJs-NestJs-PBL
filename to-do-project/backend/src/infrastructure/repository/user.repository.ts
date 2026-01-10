import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/user.entity";
import { RegisterDto } from "src/feature/auth/register/register.dto";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(private dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async register(body: RegisterDto) {
        const user = await this.create(body);
        return await this.save(user);
    }

    async findUser(email: string) {
        const user = await this.find({
            where: {
                email: email
            }
        });
        return user.length ? user[0] : null;
    }
}