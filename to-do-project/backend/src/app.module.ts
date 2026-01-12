import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddModule } from './feature/to-do/add-new-todo/add.module';
import { FindModule } from './feature/to-do/find-todo/find.module';
import { DeleteModule } from './feature/to-do/delete-todo/delete.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './infrastructure/database/data-source';
import { RegisterModule } from './feature/auth/register/register.module';
import { LoginModule } from './feature/auth/login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './infrastructure/middleware/auth.middleware';
import { AuthService } from './infrastructure/utils/auth.service';
import { UserRepository } from './infrastructure/repository/user.repository';

@Module({
  imports: [
    AddModule,
    FindModule,
    DeleteModule,
    RegisterModule,
    LoginModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSource.options,
      retryAttempts: 10,
      retryDelay: 5000
    }),
    JwtModule.register({
      global: true,
      secret: "sumit123",
      // signOptions: { expiresIn: '60m' },
    })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UserRepository],
  exports: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('task')
  }
}
