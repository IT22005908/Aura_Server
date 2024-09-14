import { GreetingState } from "./GreetingState";
import { IStateVoice } from "./IStateVoice";
import { BaseIdentifier } from "./BaseIdentifier";
import { VoiceStateManager } from "./VoiceStateManager";

export class IdleVoiceState implements IStateVoice{

    nextState!:IStateVoice
    normalizeInput!:string
    greet!:boolean;
    
    public askQuestion(): string {
        return null;
    }
    public recieveAnswer(answer: string) {
        this.normalizeInput = answer.toLowerCase().trim();
        this.identify();
        
    }
    public changeState(manager:VoiceStateManager){
        manager.changeState(this.nextState);
    }

    private identify(){
        if(this.normalizeInput == null)
            return false;
        if(BaseIdentifier.isGreeted(this.normalizeInput)){
            // move to the next Question 
            this.greet = BaseIdentifier.isGreeted(this.normalizeInput);
            this.nextState = new GreetingState();
        }
        else{
            //move to the unidentified state 
            this.nextState = this;
            this.greet = BaseIdentifier.isGreeted(this.normalizeInput);
        }


    }

}