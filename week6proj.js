
class Player {
    constructor(name) {
        this.hand = [];
        this.name = name;
    }

}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }   
}

class Deck {
    constructor() {
        this.cards = [];
        this.play();
    }
    play() {
      // const cardValue = (num) => {
//     switch (num) {
//         case 1:
//             return '2';
//             break;
//         case 2:
//             return '3';
//             break;
//         case 3:
//             return '4';
//             break;
//         case 4:
//             return '5';
//             break;
//         case 5:
//             return '6';
//             break;
//         case 6:
//             return '7';
//             break;
//         case 7:
//             return '8';
//             break;
//         case 8:
//            return  '9';
//             break;
//         case 9:
//             return '10';
//             break;
//         case 10:
//             return 'Jack';
//             break;
//         case 11:
//             return 'Queen';
//             break;
//         case 12:
//             return 'King';
//             break;
//         case 13:
//             return 'Ace';
//             break;
//         default:
//             console.log('Error')
//     }
//}

// OR

 // const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    for (const suit of cardSuit) {
        for (const value of cardValue) {
            this.cards.push(new Card(suit, value));
        }
     }
    }

    shuffle() {
        // shuffle(cardValue);
        
        // shuffle(cardSuit);
    }

    deal() {
        return this.cards.pop();
    }
}

class War {
    constructor (player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        // this.deck = new Deck();
    }

    start() {
        // this.deck.shuffle();
    }
}