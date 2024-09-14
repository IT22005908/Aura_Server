import { VoiceStateManager } from "./VoiceStateManager";

export interface IStateVoice {
     //  a voice state will ask a question and recive an answer // 
     askQuestion():string
     recieveAnswer(answer:string)

     //based on the answer decide the next state
     changeState(manager:VoiceStateManager);
}