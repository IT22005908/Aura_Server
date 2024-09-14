
import { BaseIdentifier } from "./BaseIdentifier";
import { IdleVoiceState } from "./IdleVoiceState";
import { IStateVoice } from "./IStateVoice";
import { UserOnboardingState } from "./UserOnboardingState";
import { VoiceStateManager } from "./VoiceStateManager";

export class GreetingState implements IStateVoice{
    normalizeInput!:string
    nextState!:IStateVoice

    public askQuestion(): string {
        return  "Welcome to Aura! I will help you find shops based on your preferences and interests.Would you like to proceed"
    }
    public recieveAnswer(answer: string): void {
        this.normalizeInput = answer.toLowerCase().trim();
        this.identify()
        
    }
    public changeState(manger:VoiceStateManager){
        manger.changeState(this.nextState)
    }

    private identify(){
        if(this.normalizeInput==null)
            return
        if(BaseIdentifier.isAcceptance(this.normalizeInput)){
            //proceed to get user preferences 
            this.nextState = new UserOnboardingState();

        }
        else if(BaseIdentifier.isRejection(this.normalizeInput)){
            //proceed to base state
            this.nextState = new IdleVoiceState();
        }

    }
}