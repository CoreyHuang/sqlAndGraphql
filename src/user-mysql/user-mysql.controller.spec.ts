import { Test, TestingModule } from '@nestjs/testing';
import { UserMysqlController } from './user-mysql.controller';
import { UserMysqlService } from './user-mysql.service';

describe('UserMysqlController', () => {
  let controller: UserMysqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMysqlController],
      providers: [UserMysqlService],
    }).compile();

    controller = module.get<UserMysqlController>(UserMysqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
