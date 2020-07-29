import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameService } from '../services/game.service';
import { Card } from '../services/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  playerHand$: Observable<Array<Card>>;
  dealerHand$: Observable<Array<Card>>;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.playerHand$ = this.gameService.generateHand('player');
    this.dealerHand$ = this.gameService.generateHand('dealer');
  }

  startGame(): void {
    this.gameService.drawCard('player');
    this.gameService.drawCard('player');
    this.gameService.drawCard('dealer');
    this.gameService.drawCard('dealer');
  }
}
