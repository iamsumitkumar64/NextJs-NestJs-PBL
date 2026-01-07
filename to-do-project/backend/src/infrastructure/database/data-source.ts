import TasksEntity from "src/domain/entities/tasks.entity";

import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: "sumit",
    password: "sumit123",
    database: "todo",
    entities: [TasksEntity],
    synchronize: false,
    migrations:['dist/infrastructure/database/migrations/*{.ts,.js}']
})

export { dataSource };