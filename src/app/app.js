import index from './app.html?raw';
import { WordsApp } from '../words/use-cases/words-app.js';
import { scroll_hover } from './scroll/scroll';
import { modal_input } from './input/input';
export const App = (elementID) => {
    document.querySelector(elementID).innerHTML = index;
    scroll_hover();
    modal_input();
    WordsApp(document.querySelector('.words-container'));
}

