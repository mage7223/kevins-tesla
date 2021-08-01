import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { TeslaAnswerComponent } from './tesla-answer/tesla-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeslaAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-TVWZM7Z',
    })
  ],
  providers: [
    {provide: 'googleTagManagerId',  useValue: 'GTM-TVWZM7Z'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
