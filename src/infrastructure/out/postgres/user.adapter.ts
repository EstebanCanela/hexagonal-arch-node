import User from 'src/application/port/driven/database/user.entity';
import UserDatabasePort from 'src/application/port/driven/database/user.port';

export default class UserPostgresAdapter implements UserDatabasePort {
  // TODO: Injected a Postgres DB Client
  async GetUser(address: string): Promise<User> {
    return {
      id: '123',
      name: 'my-name',
      address,
    };
  }
}
