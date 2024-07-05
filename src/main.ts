import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );

  const PORT = process.env.PORT || 5555;

  await app.listen(PORT);
}
bootstrap();
