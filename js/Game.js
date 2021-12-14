/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('keep your chin up'),
            new Phrase('cool as a cucumber'),
            new Phrase('once in a blue moon'),
            new Phrase('every cloud has a silver lining'),
            new Phrase('out of the woods')
        ];
        this.activePhrase = null;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNumber = Math.floor ( Math.random () * this.phrases.length );
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.getRandomPhrase().addPhraseToDisplay();
        this.activePhrase = this.getRandomPhrase();
    };


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const letter = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show');
        if (letter.length === show.length) {
            return true;
        } else {
            return false;
        }
    };
    

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const images = document.getElementsByClassName('tries');
        
        for (let i = 0; i < images.length; i++) {
            let symbols = images[i].firstElementChild;
            

            if (symbols.src.includes("images/liveHeart.png")) {
                this.missed += 1;
                if (this.missed > 5 || this.missed === 5) {
                    this.gameOver();
                }  
                return symbols.src = "images/lostHeart.png"   
            }           
        };
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        document.getElementById('overlay').style.display = 'block';
        
        if(this.missed >= 5) {
        document.getElementById('game-over-message').textContent = 'Ooops! Unfortunately you could not guess it';
        document.getElementById('overlay').classList.add('lose');
        document.getElementById('overlay').classList.remove('start');
        } else {
        document.getElementById('game-over-message').textContent = 'Congratulations! You are the winner';
        document.getElementById('overlay').classList.add('win');
        document.getElementById('overlay').classList.remove('start');
        }
    };

    
    handleInteraction(event) {
        event.disabled = true;
        if (this.activePhrase.checkLetter(event.textContent) === false) {
            event.classList.add('wrong');
            this.removeLife();
        } else if (this.activePhrase.checkLetter(event.textContent)) {
            event.classList.add('chosen');
            this.activePhrase.showMatchedLetter(event.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
            if (this.missed > 4) {
                this.gameOver(false);
            }
        } 
    };
};
