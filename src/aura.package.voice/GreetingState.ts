import { IStateVoice } from "./IStateVoice";

export class GreetingState implements IStateVoice{

    public handle(): string {
        
        return "Welcome to Aura! Would you like me to help you find shops based on your preferences and interests.I prefer simply yes or no"
    }

}