import { Injectable } from '@nestjs/common';
import { IStateVoice } from './aura.package.voice/IStateVoice';
import { GreetingState } from './aura.package.voice/GreetingState';

@Injectable()
export class VoiceService {
    private greetings = [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "greetings",
        "what's up",
        "howdy",
        "hi there"
    ];
    private auraOutput!:string;
    private userInput!:string
    private currentState!: IStateVoice;

    public execute (userInput:string){
        this.userInput = userInput;
        console.log("at voice service recieved",userInput);
        this.identify();
        this.auraOutput = this.currentState.handle();
    }

    public getResponse():string{
       return this.auraOutput;
    }
    

    //get the meaning of what user said 
    //i could use regular expression to match some phrases

    private identify(){
        
        let normalizeText = this.userInput.toLowerCase().trim();
        //checking the normalization 
        
        console.log("normalizing done ", normalizeText);

        if(this.isGreetings(normalizeText)){
            console.log("user has greeted");
            this.currentState = new GreetingState();
        }

    }

    private isGreetings(normText:string){
        return this.greetings.some(greeting =>normText.includes(greeting))
    }
    
}
