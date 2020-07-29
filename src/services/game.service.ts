import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter, mergeMap, map, scan, takeUntil } from 'rxjs/operators';

import { deck, shuffle, Card } from './helpers';

@Injectable()
export class GameService {
  private deck: BehaviorSubject<Array<Card>> = new BehaviorSubject(shuffle(deck));
  private deckPosition: BehaviorSubject<{ player: string; position: number }> = new BehaviorSubject({ player: 'unknown', position: null });
  private endGame: Subject<void> = new Subject();

  deck$: Observable<Card[]> = this.deck.asObservable();

  drawCard(player: string): void {
    const { position } = this.deckPosition.getValue();
    this.deckPosition.next({ player, position: position + 1 });
  }

  reset(): void {
    this.deck.next(shuffle(deck));
  }

  end(): void {
    this.endGame.next();
  }

  generateHand(playerName: string): Observable<Array<Card>> {
    return this.deck$.pipe(
      mergeMap((cards: Array<Card>) =>
        this.deckPosition
          .asObservable()
          .pipe(
            filter(({ player }) => player === playerName),
            map(({ position }) => (cards[position])),
        )
      ),
      scan((cards: Array<Card>, card: Card) => cards.concat(card), []),
      takeUntil(this.endGame.asObservable())
    );
  }
}
