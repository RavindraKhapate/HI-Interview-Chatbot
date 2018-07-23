import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {

  agent = new ApiAiClient({ accessToken: environment.dialogflow.defaultAgent });
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(@Inject('SPEECH_LANG') public lang: string) { }

  // Sends and receives messages via DialogFlow
  converse(userMessage: Message) {
    this.cancelSpeechSynthesis();
    this.agent.textRequest(userMessage.query)
      .then(response => {
        this.updateConversation(response);
      });
  }

  defaultIntent() {
    this.cancelSpeechSynthesis();
    this.agent.eventRequest('Welcome').then(response => {
      response.result.resolvedQuery = '';
      this.updateConversation(response);
    });
  }

  updateConversation(response: any) {
    const message = new Message();
    message.timestamp = new Date();
    message.response = response;
    this.conversation.next([message]);
    this.speak(response.result.fulfillment.speech);
  }

  cancelSpeechSynthesis() {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
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
