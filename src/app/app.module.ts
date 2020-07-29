import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent, HandComponent, LogoComponent } from '../components';

import { GameService } from '../services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
