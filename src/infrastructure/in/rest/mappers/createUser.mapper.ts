/* eslint-disable import/prefer-default-export */
import { CreateUserCommand } from 'src/application/command/createUser.command';

export function createUserMapper(input: string): CreateUserCommand {
  return {
    address: input,
  };
}
