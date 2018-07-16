import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../models/message';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.accessToken;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(@Inject('SPEECH_LANG') public lang: string) { }

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
    botVoice.voice = voices[1]; //Google UK English Female
    botVoice.text = text;
    botVoice.lang = this.lang;
    botVoice.rate = 1.2; //Speech rate
    speechSynthesis.speak(botVoice);
  }
}
