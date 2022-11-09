import { Controller, Get, Inject, Param } from '@nestjs/common';
import CreateUserUseCase from 'src/application/port/driver/createUser.usecase';
import { createUserMapper } from '../mappers/createUser.mapper';

@Controller('user')
export default class UserController {
  constructor(
    @Inject('CreateUserUseCase')
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Get(':address')
  async Get(@Param() params) {
    const value = await this.createUserUseCase.execute(
      createUserMapper(params.address),
    );
    return value;
  }
}
