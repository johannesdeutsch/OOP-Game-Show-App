/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
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

};

const chin = new Game(0, 'keep your chin up', null);
const cucumber = new Game(0, 'cool as a cucumber', null);
const moon = new Game(0, 'once in a blue moon', null);
const cloud = new Game(0, 'every cloud has a silver lining', null);
const woods = new Game(0, 'out of the woods', null);