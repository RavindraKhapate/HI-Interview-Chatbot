import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';
import { SpeechService } from '../../services/speech.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { concat } from 'rxjs/operator/concat';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})

export class ChatDialogComponent implements OnInit {
  @ViewChild('divChatWindow', { read: ElementRef }) public divChatWindow;
  started = false;
  message = new Message();
  agentName: string;
  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService, public speech: SpeechService) { }

  ngOnInit() {
    this.speech.started.subscribe(started => this.started = started);
   // this.agentName = 'defaultAgent';
    this.chat.defaultIntent('defaultAgent');
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }


  toggleVoiceRecognition() {
    if (!this.started) {
      this.started = true;
      this.speech.record()
        .subscribe(
          //listener
          (value) => {
            this.message.content = value;
            this.agentName = this.chat.converse(this.message);  
            this.resetControls();
          },
          //errror
          (err) => {
            if (err.error == "no-speech") {
              this.started = false;
              this.toggleVoiceRecognition();
              //TODO: Show error message
            }
          });
    }
    else {
      this.started = false;
      this.speech.destroySpeechObject();
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
    this.message.content = this.formValue;
    this.agentName = this.chat.converse(this.message);
    this.formValue = ''; 
    this.resetControls();
  }

  resetControls() {
    this.divChatWindow.nativeElement.scrollTop = this.divChatWindow.nativeElement.scrollHeight - 350; 
    console.log(this.agentName); 
    this.message = new Message(); 
  }
}
