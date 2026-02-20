import UserEntity from 'src/domain/entities/users.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class CreateUserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        // Get the factory for the User entity
        const userFactory = factoryManager.get(UserEntity);

        // Create and save 10 users using the factory
        await userFactory.saveMany(10);

        // Manual insertion example using query builder
        // await dataSource.createQueryBuilder()
        //     .insert()
        //     .into(UserEntity)
        //     .values([
        //         { username: 'Admin User', email: 'admin@example.com', password: 'adminpassword' },
        //         { username: 'Test User', email: 'test@example.com', password: 'testpassword' },
        //     ])
        //     .execute();
    }
}
