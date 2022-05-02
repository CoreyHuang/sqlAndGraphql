import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserMysqlService } from './user-mysql.service';
import { CreateUserMysqlDto } from './dto/create-user-mysql.dto';
import { UpdateUserMysqlDto } from './dto/update-user-mysql.dto';

@Controller('user-mysql')
export class UserMysqlController {
  constructor(private readonly userMysqlService: UserMysqlService) {}

  @Post()
  create(@Body() createUserMysqlDto: CreateUserMysqlDto) {
    return this.userMysqlService.create(createUserMysqlDto);
  }

  @Get()
  findAll() {
    return this.userMysqlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMysqlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserMysqlDto: UpdateUserMysqlDto) {
    return this.userMysqlService.update(+id, updateUserMysqlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMysqlService.remove(+id);
  }
}
