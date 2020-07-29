import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from '../card/card.component';
import { GameService } from '../services/game.service';
import { HandComponent } from '../hand/hand.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
