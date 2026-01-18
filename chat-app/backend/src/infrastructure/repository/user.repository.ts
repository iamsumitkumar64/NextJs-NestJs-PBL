import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";
import { RegisterDto } from "src/feature/auth/register/register.dto";
import { UpdateProfileDto } from "src/feature/profile/update-profile/updateprofile.dto";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(private readonly dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    async register(body: RegisterDto) {
        const user = this.create(body);
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

    async updateProfile(user: UserEntity, body: Partial<UpdateProfileDto>) {
        return await this.update({
            id: user.id
        }, {
            ...body
        })
    }
}