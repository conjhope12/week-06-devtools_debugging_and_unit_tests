//Conrad Hope: week6projtest

// These two will give me the oppritunity to operate testing.

const expect = chai.expect
const assert = chai.assert

// "describe" will make a title appear on the html page, and under that, will contain the parameters for testing.

describe ("Is the deck shuffled?", () => {
    
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
    
        for (let i = 0; i < cardSuit.length; i++) {
            for (let x = 0; x < cardRank.length; x++) {
               this.cards.push(new Card(cardSuit[i], cardVals[x], cardRank[x]));
            }
         }
    }

    
        shuffle() {
    
            let myDeck = new Deck();
            console.log(myDeck);
        for (let i = 0; i < this.cards.length; i++) {
            let cardShuffle = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[cardShuffle];
            this.cards[cardShuffle] = temp;
        }
    }
}

// "it" will also show a message on the html page, and will contain an example test to see if the above code is correct.

    it ("#Should display a shuffled deck", () => {

        let myDeck = new Deck();
        myDeck.shuffle();
        
        expect(myDeck.shuffle()).to.not.equal(myDeck)
    })
}) 