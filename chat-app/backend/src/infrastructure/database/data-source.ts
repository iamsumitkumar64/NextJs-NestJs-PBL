//Data-Source imports
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension';

//Entities
import UserEntity from "src/domain/entities/users.entity";
import ConversationsEntity from "src/domain/entities/conversations.entity";
import MembersEntity from "src/domain/entities/members.entity";
import MessagesEntity from "src/domain/entities/messages.entity";

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: "postgres",
    password: "sumit123",
    database: "chatAppDB",
    entities: [UserEntity, ConversationsEntity, MembersEntity, MessagesEntity],
    synchronize: false,
    migrations: ['dist/infrastructure/database/migrations/*{.ts,.js}'],

    //fake data insertion path for seeding process
    seeds: ['src/infrastructure/database/seed/**/*{.ts,.js}'],
    factories: ['src/infrastructure/database/factory/**/*{.ts,.js}']
};

const dataSource = new DataSource(options);

export { dataSource };