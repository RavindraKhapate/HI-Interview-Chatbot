import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechService } from '../services/speech.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SpeechService],
  declarations: []
})
export class SpeechModule { }
