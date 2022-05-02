import { Module } from '@nestjs/common';
import { UserMysqlService } from './user-mysql.service';
import { UserMysqlController } from './user-mysql.controller';
import { TypeOrmModule } from '@nestjs/typeorm' //--------------------
import { UserMysql } from './entities/user-mysql.entity' //--------------------

@Module({
  imports: [TypeOrmModule.forFeature([UserMysql])],
  controllers: [UserMysqlController],
  providers: [UserMysqlService]
})
export class UserMysqlModule {}
