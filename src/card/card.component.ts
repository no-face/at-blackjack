import { Component, Input } from '@angular/core';

import { Card, Suit } from '../services/helpers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;

  get symbol(): string {
    switch (this.card.suit) {
      case 'hearts':
        return 'H';
      case 'diamonds':
        return 'D';
      case 'spades':
        return 'S';
      case 'clubs':
        return 'C';
    }
  }
}
