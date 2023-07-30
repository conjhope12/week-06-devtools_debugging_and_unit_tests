// Conrad Hope: Week 6 Project

// This "Card" class was made to make objects for the different card attributes.

class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }   
}

// The "Deck" class will allow us to tie in the values with the ranks.
// >> The computer can not tell the difference in values with strings alone. Assigning values to the strings will help the identify the largest value.

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
        // console.log("Deck Ran")
    }
    
    createDeck() {
 const cardSuit = ["Diamond", "Clubs", "Hearts", "Spades"];
 const cardRank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
 const cardVals = [2,3,4,5,6,7,8,9,10,11,12,13,14]

 // The "for" functions listed below will add all different combonations in the above arrays.
 // >> There 52 possibilities for card combonations, so the functions listed below make it possible for creating a deck of cards.

    for (let i = 0; i < cardSuit.length; i++) {
        for (let x = 0; x < cardRank.length; x++) {
           this.cards.push(new Card(cardSuit[i], cardVals[x], cardRank[x]));
        }
     }
    }

// "Shuffle()" was made by using the math equations "floor" and "random".
// >> The "Math.floor()" method always rounds down and returns the largest integer less than or equal to a given number.
// >> The "Math.random()" method grabs arrays and randomly reassigns all of the elements positions.

// "Shuffle()" was also tested by using mocha and chai.

    shuffle() {

        let myDeck = new Deck();
        console.log(myDeck);
    for (let i = 0; i < this.cards.length; i++) {
        let cardShuffle = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.cards[i] = this.cards[cardShuffle];
        this.cards[cardShuffle] = temp;
    }
    // for (let i = 0; i < 5; i++) {
    //     console.log(`${this.cards[i].rank} of ${this.cards[i].suit}`)
    // }
    // console.log(this)
    }

// "Deal()" assigns every player a card, so both players had 26 cards to start.

    deal() {
        return this.cards.pop();
    }
}

// The "Player" class was created to make players and to assign them 26 shuffled cards.
// ".push" and ".shift" made it possibble to play a card; then remove the card after use.

class Player {
    constructor(name) {
        this.hand = [];
        this.name = name;
    }

    addCard(card) {
        this.hand.push(card);
    }

    playCard() {
        return this.hand.shift();
    }
}

// The "War" class displays the playing of the game (once all the cards have been assigned values and shuffled).

// The player objects were made so any custom name can be made in the "new Deck()" area.

class War {
    constructor (player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        this.deck = new Deck();
    }

// "start()" will grab all of the information and data from the above classes, and this "start()" function will create the actual game functionality.

    start() {
        this.deck.shuffle();

// This while function will supply both players with 26 cards each.

        while (this.deck.cards.length > 0) {
             this.player1.addCard(this.deck.deal());
             this.player2.addCard(this.deck.deal());
         }
         
// This while function will determine the length of the game.
//>> Once both conditions are met, the game will end and there will be a winner.

         while(this.player1.hand.length > 0 && this.player2.hand.length > 0) {
             this.playRound();
         }
         
         if (this.player1.hand.length > 0) {
             console.log(`${this.player1.name} wins the game`);
         } else {
             console.log(`${this.player2.name} wins the game`);
         }
    }

// "playround" will determine what each player's card is and will determine who wins the round.
//>> This proccess will move on until there are no cards left, the a winner of the game will be determined.
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        console.log(`${this.player1.name} plays ${card1.value} of ${card1.suit}`);
        console.log(`${this.player2.name} plays ${card2.value} of ${card2.suit}`);
        
        if(card1.value > card2.value) {
            this.player1.addCard(card1);
            this.player2.addCard(card2);
            console.log(`${this.player1.name} wins the round`);
        } else if (card1.value < card2.value) {
            this.player1.addCard(card1);
            this.player2.addCard(card2);
            console.log(`${this.player2.name} wins the round`);
        } else {
            console.log('It is a tie game');
        }
    }
}

// This log will begin the game and end once all cards are drawn.

let myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck.cards);

let war = new War("Shrek", "Donkey");
console.log(war.start())