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
        ulOfDiv.innerHTML += `<li>${splitPhrase[i]}</li>`;

        for (let i = 0; i < splitPhrase.length; i++) {
            if (splitPhrase[i] === ' ') {
                createListElement.classList.add('space');
                createListElement.classList.remove(`hide letter ${splitPhrase[i]}`);
            } else if (splitPhrase[i] === '\w') {
                createListElement.classList.add(`hide letter ${splitPhrase[i]}`);
                createListElement.classList.remove('space');
            }
        }  
    };
};

const phraseObject = new Phrase('some phrase');