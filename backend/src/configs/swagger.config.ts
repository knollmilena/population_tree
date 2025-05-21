import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Geo population three')
  .setDescription('The geo population three API description')
  .setVersion('1.0')
  .addTag('geo-population-three')
  .build();
