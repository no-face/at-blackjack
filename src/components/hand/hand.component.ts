import { Component, Input } from '@angular/core';

import { Card } from '../../services/helpers';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent {
  @Input() hand: Array<Card> = [];
  @Input() player: string = 'dealer';

  constructor(public gameService: GameService) { }

  hit(): void {
    this.gameService.drawCard(this.player);
  }

  stand(): void {
    this.gameService.end();
  }
}
