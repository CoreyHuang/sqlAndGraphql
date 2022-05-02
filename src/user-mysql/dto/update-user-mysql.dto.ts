import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMysqlDto } from './create-user-mysql.dto';

export class UpdateUserMysqlDto extends PartialType(CreateUserMysqlDto) {
  title: string;

  content: string;

  createTime: Date;

  updateTime: Date;

  isDelete: boolean;
}
