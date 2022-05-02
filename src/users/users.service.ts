import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UserMysql } from '../user-mysql/entities/user-mysql.entity'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserMysql) private userRepository: Repository<UserMysql>) { }

  async create(createUserInput: CreateUserInput) {
     await this.userRepository.save({
      "createTime": "2022-05-02 19:14:12",
      "updateTime": "2022-05-02 19:14:12",
      "title": "qa",
      "content": "123",
      "isDelete": false
    })

    return {
      exampleField: 2
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
