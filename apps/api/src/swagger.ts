import { API_PREFFIX } from './app/constants';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  // Documentation
  const options = new DocumentBuilder()
    .setTitle('Dinivas API')
    .setDescription('Dinivas API description')
    .setVersion('1.0')
    .setBasePath(`/${API_PREFFIX}`)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
