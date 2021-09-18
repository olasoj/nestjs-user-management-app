import { ConfigService } from '@nestjs/config';
import { ExpressAdapter } from '@nestjs/platform-express';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import * as Express from 'express';
import * as cors from 'cors';


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   const configService = app.get(ConfigService);
//   const port = configService.get('PORT');
//   await app.listen(port);
//   Logger.log(`Running on port ${port}`, 'Bootstrap');
// }
// bootstrap();


const server = Express();
server.use(cors());
server.use(cors());
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));
server.get('/_ah/start', (req, res) => res.send('ok'));
server.get('/_ah/stop', (req, res) => res.send('ok'));


async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
  Logger.log(`Running on port ${port}`, 'Bootstrap');

}

bootstrap();

