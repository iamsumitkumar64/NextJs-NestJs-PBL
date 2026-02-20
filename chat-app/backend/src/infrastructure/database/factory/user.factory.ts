import UserEntity from 'src/domain/entities/users.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(UserEntity, (faker) => {
    const user = new UserEntity();
    user.username = faker.person.fullName();
    user.email = faker.internet.email();
    user.password = 'User@123';
    return user;
});
