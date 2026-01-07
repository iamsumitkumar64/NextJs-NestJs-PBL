import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddModule } from './feature/to-do/add-new-todo/add.module';
import { findModule } from './feature/to-do/find-todo/find.module';
import { DeleteModule } from './feature/to-do/delete-todo/delete.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './infrastructure/database/data-source';

@Module({
  imports: [
    AddModule,
    findModule,
    DeleteModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSource.options,
      retryAttempts: 10,
      retryDelay: 5000
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
