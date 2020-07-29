import { Component } from '@angular/core';

import { deck } from '../services/deck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'at-blackjack';
  card = deck[0];

  ngOnInit(): void {
    console.log(this.card);
  }
}
