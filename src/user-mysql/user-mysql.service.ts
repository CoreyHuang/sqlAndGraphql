import { Injectable } from '@nestjs/common';
import { CreateUserMysqlDto } from './dto/create-user-mysql.dto';
import { UpdateUserMysqlDto } from './dto/update-user-mysql.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UserMysql } from './entities/user-mysql.entity' //--------------------

@Injectable()
export class UserMysqlService {
  constructor(@InjectRepository(UserMysql) private userRepository: Repository<UserMysql>) {}

  async create(createUserMysqlDto: CreateUserMysqlDto) {
    createUserMysqlDto.createTime = createUserMysqlDto.updateTime = new Date()
    createUserMysqlDto.isDelete = false

    return await this.userRepository.save(createUserMysqlDto)
  }

  findAll() {
    return `This action returns all userMysql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userMysql`;
  }

  update(id: number, updateUserMysqlDto: UpdateUserMysqlDto) {
    return `This action updates a #${id} userMysql`;
  }

  remove(id: number) {
    return `This action removes a #${id} userMysql`;
  }
}
