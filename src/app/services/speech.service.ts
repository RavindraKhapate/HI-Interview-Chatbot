import { Inject, Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import * as _ from "lodash";
import { Observable } from 'rxjs/Rx';
 
interface IWindow extends Window {
  webkitSpeechRecognition: any; 
}

@Injectable()
export class SpeechService {

  speechRecognition: any;
  message: Subject<any> = new Subject();
  started: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private zone: NgZone, @Inject('SPEECH_LANG') public lang: string) {
  }

  record(): Observable<string> {

    return Observable.create(observer => {

      const { webkitSpeechRecognition }: IWindow = <IWindow>window;
      this.speechRecognition = new webkitSpeechRecognition();
      this.speechRecognition.continuous = true;
      this.speechRecognition.lang = this.lang;
      this.speechRecognition.maxAlternatives = 1;

      this.speechRecognition.onresult = speech => {
        let term: string = "";
        let message = {};
        if (speech.results) {
          var result = speech.results[speech.resultIndex];
          var transcript = result[0].transcript;
          if (result.isFinal) {
            if (result[0].confidence < 0.3) {
              message = { error: true, message: 'Cannot recognize' };
            }
            else {
              term = _.trim(transcript);
              message = { success: true, message: term };
            }
          }
        }

        this.zone.run(() => {
          observer.next(term);
          if (message['error']) {
            this.message.error(message);
          } else {
            this.message.next(message);
          }
        });
      };

      this.speechRecognition.onerror = error => {
        observer.error(error);
        this.message.error(error);
      };

      this.speechRecognition.onend = () => {
        observer.complete();
        this.started.next(false);
      };

      this.speechRecognition.onstart = () => {
        this.zone.run(() => {
          this.started.next(true);
        });
      };

      this.speechRecognition.start();
    });
  }

  destroySpeechObject() {
    if (this.speechRecognition) {
      this.speechRecognition.stop(); 
    }
  }
}
