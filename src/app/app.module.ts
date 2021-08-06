import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

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
    HttpClientModule,
    AppRoutingModule,
    environment.production ?
      GoogleTagManagerModule.forRoot({
        id: environment.gtmID,
    }): []
  ],
  providers: [
    environment.production ? {provide: 'googleTagManagerId',  useValue: environment.gtmID}: []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
