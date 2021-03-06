/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* const phrase = new Phrase();
const game = new Game();
console.log(game);
console.log(phrase); */

/* const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`); */

/* const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase}`);
}); */

/* const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase()); */

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

/* const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); */

const buttonElement = document.getElementById('btn__reset');
let game;
buttonElement.addEventListener('click', e => {  
    game = new Game();
    game.reset(e);
    game.startGame();
});

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/


const button = document.getElementsByClassName('key');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', event => {
        game.handleInteraction(event.target);  
    });   
};



