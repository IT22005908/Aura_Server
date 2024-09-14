import { Injectable } from '@nestjs/common';
import { VoiceStateManager } from './aura.package.voice/VoiceStateManager';

@Injectable()
export class VoiceService {
    
    private manager!:VoiceStateManager
    
    constructor(){
        this.manager = new VoiceStateManager();
    }

    public processVoiceData(text:string){

        this.manager.execute(text);
    }

    public getResponse():string{

        return this.manager.getResponse()
    }
    
        

   
}
