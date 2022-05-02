import { Test, TestingModule } from '@nestjs/testing';
import { UserMysqlService } from './user-mysql.service';

describe('UserMysqlService', () => {
  let service: UserMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMysqlService],
    }).compile();

    service = module.get<UserMysqlService>(UserMysqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
