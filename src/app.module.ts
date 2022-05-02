import { Module } from '@nestjs/common';
import { GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { UserMysqlModule } from './user-mysql/user-mysql.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Resolver()
export class FooResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    UserMysqlModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'fortest',
      entities: [__dirname + '/../**/*.entity.js'], //--------------------
      // entities: [__dirname + '/'],
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, FooResolver],
})
export class AppModule { }