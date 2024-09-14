import { IStateVoice } from "./IStateVoice";
import { VoiceStateManager } from "./VoiceStateManager";




export class UserOnboardingState implements IStateVoice{
    
    private answers!:string[];
    private count:number = 0
    
    private onboardingQuestsions:string[] = [
        "What products do you usually shop for",
        "Do you have any preferred brands",
        "Would you like me to recommend shops near you or other locations",
        "Do you need any special accommodations while shopping",
        "Would you like to receive updates on discounts or special offers"
    ]

    askQuestion(): string {
        const temp = this.onboardingQuestsions[this.count]
        return temp;
        
    }
    recieveAnswer(answer: string) {
        
    }
    changeState(manager: VoiceStateManager) {
        
    }
}