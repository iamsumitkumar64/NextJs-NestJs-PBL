import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:9090'],
    credentials: true,
    methods:['GET','POST','PUT','PATCH','DELETE']
  });

  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    whitelist: true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
