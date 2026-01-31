import { Injectable } from "@nestjs/common";
import UserEntity from "src/domain/entities/users.entity";
import { RegisterDto } from "src/feature/auth/register/register.dto";
import { UpdateProfileDto } from "src/feature/users/update-profile/updateprofile.dto";
import { DataSource, Not, Repository } from "typeorm";

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

    async getUserList(currentUser_id: number) {
        return await this.find({
            where: {
                id: Not(currentUser_id),
                is_active: true
            },
            select: {
                id: true,
                email: true,
                is_online: true,
                last_seen_at: true,
                username: true
            },
        });
    }
}