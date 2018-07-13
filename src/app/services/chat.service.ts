import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.accessToken;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // Sends and receives messages via DialogFlow
  converse(userMessage: Message) {

    this.update(userMessage);

    return this.client.textRequest(userMessage.content)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message('bot');
        botMessage.content = speech;
        this.update(botMessage);
        this.speak(speech);
      });
  }

  // Adds message to source
  update(message: Message) {
    this.conversation.next([message]);
  }

  speak(text) {
    var voices = speechSynthesis.getVoices();
    var botVoice = new SpeechSynthesisUtterance();
    botVoice.voice = voices[10]; 
    botVoice.text = text;
    botVoice.lang = 'en-IN';
    botVoice.rate = 1.1;
    speechSynthesis.speak(botVoice);
  }
}
