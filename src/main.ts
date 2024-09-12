import { NestFactory } from '@nestjs/core';
import { VoiceModule } from './aura.voice.module';

async function bootstrap() {
  const app = await NestFactory.create(VoiceModule);
  await app.listen(3000);
}
bootstrap();
