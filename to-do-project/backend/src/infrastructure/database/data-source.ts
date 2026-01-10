import { DataSource } from "typeorm";
import UserEntity from "src/domain/entities/user.entity";
import TasksEntity from "src/domain/entities/tasks.entity";

const dataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: "sumit",
    password: "sumit123",
    database: "todo",
    entities: [TasksEntity, UserEntity],
    synchronize: false,
    migrations: ['dist/infrastructure/database/migrations/*{.ts,.js}']
})

export { dataSource };