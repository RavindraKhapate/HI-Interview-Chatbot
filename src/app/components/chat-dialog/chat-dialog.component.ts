import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';
import { SpeechService } from '../../services/speech.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})

export class ChatDialogComponent implements OnInit {
  @ViewChild('divChatWindow', { read: ElementRef }) public divChatWindow;
  started = false;
  message = new Message('', '', '', null);

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService, public speech: SpeechService) { }

  ngOnInit() {

    this.speech.message.subscribe(msg => {
      this.message.timestamp = new Date();
      this.message.content = msg.message;
      this.message.sentBy = 'user';
      this.message.avatar = '../../assets/images/user.png';
      this.chat.converse(this.message);
      this.resetControls();
    });

    this.speech.started.subscribe(started => this.started = started);

    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }

  toggleVoiceRecognition() {
    if (this.started) {
      this.speech.stop();
    } else {
      this.speech.start();
    }
  }

  getMicStyle() {
    if (this.started) {
      return 'fa fa-microphone-slash fa-2x';
    } else {
      return 'fa fa-microphone fa-2x';
    }
  }

  sendMessage() {
    this.message.timestamp = new Date();
    this.message.content = this.formValue;
    this.message.sentBy = 'user';
    this.message.avatar = '../../assets/images/user.png';
    this.chat.converse(this.message);
    this.formValue = '';
    this.resetControls();
  }

  resetControls() {
    this.divChatWindow.nativeElement.scrollTop = this.divChatWindow.nativeElement.scrollHeight - 350;
    this.message = new Message('', '', '', null);
  }
}
