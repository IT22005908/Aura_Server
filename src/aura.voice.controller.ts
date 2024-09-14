import { Body, Controller, Get,Param,Post } from '@nestjs/common';
import { VoiceService } from './aura.voice.service';

interface VoiceText {
    text:string
}


@Controller('voicerecognition')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @Post()
    postPassVoice(@Body() req:VoiceText):string{  
    
    //pass to voice Service 
    this.voiceService.processVoiceData(req.text);
    //this needed to be implemented later 
    return this.voiceService.getResponse();
    
  }
}
