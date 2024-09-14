
import { IdleVoiceState } from "./IdleVoiceState";
import { IStateVoice } from "./IStateVoice";

export class VoiceStateManager {
    // this will be the context class 
    // this will track the state of the object 
    currentState!: IStateVoice
    response!:string
    userInput!:string
    
    constructor(){
        console.log("voice state manager object is created");
        this.currentState = new IdleVoiceState();
    }

    public execute(userInput:string){

        console.log(userInput)
        if(userInput != null){
            this.userInput = userInput;
            this.currentState.recieveAnswer(this.userInput);
        }
        this.currentState.changeState(this); 
        console.log("In state manager",this.currentState);
        this.response= this.currentState.askQuestion();

    }

    public getResponse():string{
        if(this.response == null){
            return "Aura did not get your response. Please say it again"
        }
        return this.response
    }

    public changeState(nextState :IStateVoice){
        this.currentState = nextState;
    }
}