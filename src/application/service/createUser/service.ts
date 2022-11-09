import { Inject } from '@nestjs/common';
import { CreateUserCommand } from 'src/application/command/createUser.command';
import UserDatabasePort from 'src/application/port/driven/database/user.port';
import CreateUserUseCase from 'src/application/port/driver/createUser.usecase';
import { mapperUserEntityToUserDomain } from 'src/application/service/createUser/user.mapper';
import { CreateUserResult } from './result';

export default class CreateUserService implements CreateUserUseCase {
  constructor(
    @Inject('UserDatabasePort')
    private readonly userDatabasePort: UserDatabasePort,
  ) {}

  async execute(_input: CreateUserCommand): Promise<CreateUserResult> {
    const user = await this.userDatabasePort.GetUser(_input.address);
    const userDomain = mapperUserEntityToUserDomain(user);
    return {
      type: 'OWNER',
      name: userDomain.name,
      address: userDomain.address,
    };
  }
}
