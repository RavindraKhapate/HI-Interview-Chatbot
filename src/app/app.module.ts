import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ChatModule } from './modules/chat.module';
import { HelpSectionModule } from './modules/help-section.module';
import { SpeechModule } from './modules/speech.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    HelpSectionModule,
    SpeechModule
  ],
  providers: [
    { provide: 'SPEECH_LANG', useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
