import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

import { TypeOrmModule } from '@nestjs/typeorm' //--------------------
import { UserMysql } from '../user-mysql/entities/user-mysql.entity' //--------------------

@Module({
  imports: [TypeOrmModule.forFeature([UserMysql])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
