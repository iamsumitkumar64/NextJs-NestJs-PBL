import { Injectable } from '@nestjs/common';
import MembersEntity from 'src/domain/entities/members.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MemberRepository extends Repository<MembersEntity> {
    constructor(private readonly datasource: DataSource) {
        super(MembersEntity, datasource.createEntityManager());
    }

    async insertMember(member_id: number, conversation_id: number) {
        const conversation = this.create
            (
                {
                    user_id: { id: member_id },
                    conversation_id: { id: conversation_id }
                }
            );
        return await this.save(conversation);
    }

}
