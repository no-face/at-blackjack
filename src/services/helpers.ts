export type Suit = 'hearts' | 'diamonds' | 'spades' | 'clubs';

export interface Card {
  value: number;
  alternateValue?: number;
  textRepresentation: string;
  suit: Suit;
}

export const suits: Array<Suit> = ['hearts', 'diamonds', 'spades', 'clubs'];
export const faces: Array<Partial<Card>> = [
  { value: 2, textRepresentation: '2' },
  { value: 3, textRepresentation: '3' },
  { value: 4, textRepresentation: '4' },
  { value: 5, textRepresentation: '5' },
  { value: 6, textRepresentation: '6' },
  { value: 7, textRepresentation: '7' },
  { value: 8, textRepresentation: '8' },
  { value: 9, textRepresentation: '9' },
  { value: 10, textRepresentation: '10' },
  { value: 10, textRepresentation: 'J' },
  { value: 10, textRepresentation: 'Q' },
  { value: 10, textRepresentation: 'K' },
  { value: 1, alternateValue: 11, textRepresentation: 'A' }
];

export const deck: Array<Card> = faces.reduce(
  (partialDeck: Array<Card>, currentFace: Partial<Card>) => partialDeck
    .concat(suits.map((suit: Suit) => ({ ...currentFace, suit }) as Card)),
  []
);

export const shuffle = (originalDeck: Array<any>) => {
  // Don't mutate incoming reference :(
  const deckCopy = [...originalDeck];

  for (let index = deckCopy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * index);
    const temp = deckCopy[index];
    deckCopy[index] = deckCopy[randomIndex];
    deckCopy[randomIndex] = temp;
  }

  return deckCopy;
};
