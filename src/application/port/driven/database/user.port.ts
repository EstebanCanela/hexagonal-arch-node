import User from './user.entity';

export default interface UserDatabasePort {
  getUser(address: string): Promise<User>;
}
