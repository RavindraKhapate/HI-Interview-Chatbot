import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {

  defaultAgent = new ApiAiClient({ accessToken: environment.dialogflow.defaultAgent });
  cSharpAgent = new ApiAiClient({ accessToken: environment.dialogflow.cSharpAgent });
  angularAgent = new ApiAiClient({ accessToken: environment.dialogflow.angularAgent });
  agentName: string;
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(@Inject('SPEECH_LANG') public lang: string) { }

  // Sends and receives messages via DialogFlow
  converse(userMessage: Message):string {

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    this.update(userMessage); 
    if (this.agentName == 'cSharpAgent') {
      this.cSharpAgent.textRequest(userMessage.content)
        .then(res => {
          const speech = res.result.fulfillment.speech;
          if (res.result.action == 'BegineerStartAngularInterviewAgent' || res.result.action == 'IntermediateStartAngularInterviewAgent'
            || res.result.action == 'ExpertStartAngularInterviewAgent') {
            this.agentName = 'angularAgent'
            this.defaultIntent(this.agentName);
          }
          else {
            this.agentName = 'cSharpAgent'; 
            this.updateConversation(speech);
          }
        });
    }
    else if (this.agentName == 'angularAgent') {
      this.angularAgent.textRequest(userMessage.content)
        .then(res => {
          const speech = res.result.fulfillment.speech; 
          this.updateConversation(speech);
        });
    }
    else {
      console.log('Executing Default Agent');
      this.defaultAgent.textRequest(userMessage.content)
        .then(res => {
          const speech = res.result.fulfillment.speech; 
          if (res.result.action == 'StartCsharpInterviewAgent') {
            this.agentName = 'cSharpAgent'; 
            this.defaultIntent(this.agentName);
          }
          else {
            this.agentName = 'defaultAgent'; 
            this.updateConversation(speech);
          }
        });
    }
    return this.agentName;
  }

  defaultIntent(agentName: string = 'defaultAgent') {

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    if (agentName == 'cSharpAgent') {
      this.cSharpAgent.eventRequest('Welcome').then(res => {
        const speech = res.result.fulfillment.speech;
        this.updateConversation(speech);
      });
    }
    else if (agentName == 'angularAgent') {
      this.angularAgent.eventRequest('Welcome').then(res => {
        const speech = res.result.fulfillment.speech;
        this.updateConversation(speech);
      });
    }
    else {
      this.defaultAgent.eventRequest('Welcome').then(res => {
        const speech = res.result.fulfillment.speech; 
        this.updateConversation(speech);
      });
    }
  }

  updateConversation(speech: string) {
    const botMessage = new Message('bot'); 
    botMessage.content = speech;
    this.update(botMessage); 
    this.speak(speech);
  }

  // Adds message to source
  update(message: Message) {
    this.conversation.next([message]);
  } 

  speak(text) {
    var voices = speechSynthesis.getVoices();
    var botVoice = new SpeechSynthesisUtterance();
    botVoice.voice = voices[1]; //Google UK English Female
    botVoice.text = text;
    botVoice.lang = this.lang;
    botVoice.rate = 1.2; //Speech rate 
    speechSynthesis.speak(botVoice);
  }

}
