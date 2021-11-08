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
        const createListElement = document.createElement('li');
        selectPhraseDiv.firstChild.appendChild(createListElement);
        if (this.phrase === ' ') {
            createListElement.classList.add('space');
            createListElement.classList.remove('letter');
        } else if (this.phrase === '\w') {
            createListElement.classList.add('letter');
            createListElement.classList.remove('space');
        }
    };

};

const phraseObject = new Phrase('some phrase');