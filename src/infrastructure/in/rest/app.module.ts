import { Module } from '@nestjs/common';
import CreateUserService from 'src/application/service/createUser/service';
import UserPostgresAdapter from 'src/infrastructure/out/postgres/user.adapter';
import UserController from './controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'CreateUserUseCase',
      useClass: CreateUserService,
    },
    {
      provide: 'UserDatabasePort',
      useClass: UserPostgresAdapter,
    },
  ],
})
export default class AppModule {}
