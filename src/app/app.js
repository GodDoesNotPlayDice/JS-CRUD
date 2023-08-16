import index from './app.html?raw';
import { WordsApp } from '../words/use-cases/words-app.js';
import { f_menu } from './menu/menu';
import { scroll_hover } from './scroll/scroll';
import { renderWords } from '../words/presentation/render-words';
import { modal_input } from './input/input';
export const App = (elementID) => {
    document.querySelector(elementID).innerHTML = index;
    f_menu();
    scroll_hover();
    modal_input();
    WordsApp(document.querySelector('.words-container'));
}

