import { Module } from '@nestjs/common';
import {VoiceController} from './aura.voice.controller';
import { VoiceService } from './aura.voice.service';

@Module({
  imports: [],
  controllers: [VoiceController],
  providers: [VoiceService],
})
export class VoiceModule {}
