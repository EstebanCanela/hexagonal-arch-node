import { CreateUserCommand } from 'src/application/command/createUser.command';
import { CreateUserResult } from 'src/application/service/createUser/result';
import { UseCase } from './usecase';

export default interface CreateUserUseCase
  extends UseCase<CreateUserCommand, CreateUserResult> {
  execute(input: CreateUserCommand): Promise<CreateUserResult>;
}
