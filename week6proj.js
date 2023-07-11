console.log('lol')

const expect = chai.expect
const assert = chai.assert

describe('Question 1a: Sorted array of numbers', () => {
    it ('#should sort an array in ascending order', () => {
      const arrayOfNumbers = [1, 5, 3, 2, 4]
      arrayOfNumbers.sort((a, b) => a - b)

      expect(arrayOfNumbers).to.deep.equal([1,2,3,4,5])
    })

  })

  describe('Question 1b: Wallet equation', () => {

    class Wallet {
      constructor(startingMoney) {
        this.money = startingMoney
      }
    
      addMoney(amount) {
        this.money += amount
      }
    
      removeMoney(amount) {
        this.money -= amount
      }
    }
    
    it ('should have updated wallet balance', () => {
      
      let myWallet = new Wallet(100)
      myWallet.removeMoney(14.99)
      myWallet.addMoney(3) 

      expect(myWallet.money).to.equal(88.01)
    })
  })

  describe('Question 1c: Day of the week calc.', () => {
    const dayOfTheWeek = (num) => {
      switch (num) {
        case 1:
          return 'Monday'
          break;
    
        case 2:
          return 'Tuesday'
          break;
    
        case 3:
          return 'Wednesday'
          break;
    
        case 4:
          return 'Thursday'
          break;
    
        case 5:
          return 'Friday'
          break;
    
        case 6:
          return 'Saturday'
          break;
    
        case 7:
          return 'Sunday'
          break;
    
          default:
            console.log('Err. Something went wrong.')
      }
    }
    
    it ('#should tell DOW by num', () => {
      
      expect(dayOfTheWeek(3)).to.equal('Wednesday')
    })
  })

  describe('Qustion 1d: Only wizards shall pass', () => {
    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
    ]
    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter((character) => character.isAWizard == true)
    }
    
    it ('#should tell who is a wizard.', () => {
      
      expect(onlyWizards(movieCharacters)).to.deep.equal([{
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      }, {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },])
      
    })
  })
  