/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const selectPhraseDiv = document.getElementById('phrase');
        const ulOfDiv = selectPhraseDiv.firstElementChild;
        
        const splitPhrase = this.phrase.split('');
        
        for (let i = 0; i < splitPhrase.length; i++) {
            if (splitPhrase[i] === ' ') {
                ulOfDiv.innerHTML += `<li class='space'> </li>`;
            } else {
                ulOfDiv.innerHTML += `<li class='letter'>${splitPhrase[i]}</li>`;    
            };
        };
    };

    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */  

    checkLetter(letter) {
        return this.phrase.includes(letter);
    };


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        const selectPhraseDiv = document.getElementById('phrase');
        const ulOfDiv = selectPhraseDiv.firstElementChild;
        const letterLi = ulOfDiv.getElementsByTagName('li');
        
        for (let i = 0; i < letterLi.length; i++) {
            if (letterLi[i].textContent === letter) {
                letterLi[i].classList.replace('letter', 'show');
            }
        };
        
    };


};

const phraseObject = new Phrase('some phrase');