import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../services/helpers';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() hand: Array<Card> = [];
  @Input() player: string = 'dealer';

  constructor(public gameService: GameService) {}

  ngOnInit(): void {

  }
}
