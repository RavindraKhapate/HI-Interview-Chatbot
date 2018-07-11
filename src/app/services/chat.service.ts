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
        const botMessage = new Message(speech, 'bot', '../../assets/images/chatbot.png', userMessage.timestamp);
        this.update(botMessage);
      });
  }

  // Adds message to source
  update(userMessage: Message) {
    this.conversation.next([userMessage]);
  }
}
