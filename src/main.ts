import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('PaymentsMS-main');

  const app = await NestFactory.create(AppModule, {
    rawBody: true, // This is required to access the raw body of the request, only necesary for the /webhook endpoint
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      },
    },
    {
      inheritAppConfig: true,  // This is required to use class-validator in the microservice
    },
  );

  await app.startAllMicroservices();
  await app.listen(envs.port);

  logger.log(`Payments Microservice is running on port: ${envs.port}`);
}
bootstrap();
