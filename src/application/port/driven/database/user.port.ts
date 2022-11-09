import User from './user.entity';

export default interface UserDatabasePort {
  GetUser(address: string): Promise<User>;
}
