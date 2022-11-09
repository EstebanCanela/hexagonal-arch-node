/* eslint-disable import/prefer-default-export */
import User from 'src/application/port/driven/database/user.entity';
import UserDomain from 'src/domain/user/user.entity';

export function mapperUserEntityToUserDomain(userEntity: User): UserDomain {
  return {
    name: userEntity.name,
    address: `eth-${userEntity.address}`,
  };
}
