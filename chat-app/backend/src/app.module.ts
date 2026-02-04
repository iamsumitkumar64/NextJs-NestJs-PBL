import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './infrastructure/database/data-source';
import { RegisterModule } from './feature/auth/register/register.module';
import { LoginModule } from './feature/auth/login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './infrastructure/middleware/auth.middleware';
import { AuthService } from './infrastructure/utils/auth.service';
import { UserRepository } from './infrastructure/repository/user.repository';
import { UpdateProfileModule } from './feature/users/update-profile/updateprofile.module';
import { ChatModule } from './feature/communication/chat.module';
import { UserListModule } from './feature/users/get-user-list/user-list.module';
import { conversationListModule } from './feature/communication/conversations/conversation-list/conversation-list.module';
import { MessageListModule } from './feature/communication/messages/messages-list/message-list.module';

@Module({
  imports: [
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
    }),

    //
    RegisterModule,
    LoginModule,
    UpdateProfileModule,
    ChatModule,
    UserListModule,
    conversationListModule,
    MessageListModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, UserRepository],
  exports: []
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({
        method: RequestMethod.ALL,
        path: 'login'
      }, {
        method: RequestMethod.ALL,
        path: 'register'
      })
      .forRoutes('*')
  }
}
