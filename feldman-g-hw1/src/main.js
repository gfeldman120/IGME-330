// Importing function from utils.js
import { randomElement } from "./utils.js";

// Variables
let text;
let button;
let fiveButton;
const wordsArrays = [];

// Get elements with querySelector, begin getting technobabble data
const init = () => {
    text = document.querySelector(`#output`);
    button = document.querySelector(`#btn-gen-1`);
    fiveButton = document.querySelector(`#btn-gen-5`);
    loadBabble();
}

// Get technobabble data from json file, add events to buttons and generate 1 technobabble
const loadBabble = () => {
    fetch(`./data/babble-data.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            wordsArrays.push(data.words1, data.words2, data.words3);
            button.addEventListener(`click`, () => generateTechno(1));
            fiveButton.addEventListener(`click`, () => generateTechno(5));
            generateTechno(1);
        });
}

// Generate as many technobabbles as specified and update output
const generateTechno = (count) => {
    let result = ``;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < wordsArrays.length; j++) {
            result += `${randomElement(wordsArrays[j])} `;
        }
        result += `<br>`;
    }
    text.innerHTML = result;
}

// Don't wait for load event, type="module" already makes this run after HTML is loaded
init();