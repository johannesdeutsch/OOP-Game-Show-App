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
};
