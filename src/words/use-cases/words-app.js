
import { renderWords } from "../presentation/render-words";
import { getNewWord } from "../store/get_new_word.store";
import wordsStore from "../store/words.store";

export const WordsApp = async (element) => {
    const btnload = document.querySelector('.loadMore');
    const loading = document.createElement('h3');
    loading.classList.add('lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-purple-500');
    loading.innerHTML = `Loading Words...`;
    element.innerHTML = loading.outerHTML;
    try {
        await wordsStore.loadStationWords(btnload);
        element.innerHTML = '';
        const words = wordsStore.getWords();
        let words_render = renderWords(words);
        for (let i = 0; i < words_render.length; i++) {
            element.innerHTML += words_render[i];
        } 

        const loadMore = document.querySelector('.loadMore');
        loadMore.addEventListener('click', async () => {
            try {
                // un bucle donde tenga todos elementos hasta que se acaben
                do{
                await wordsStore.loadStationWords(btnload);
                wordsStore.getCurrentPage();
                const words = wordsStore.getWords();
                let words_render = renderWords(words);
                for (let i = 0; i < words_render.length; i++) {
                    element.innerHTML += words_render[i];
                }
                words_render = []; 
                } while (wordsStore.getWords().length > 0);

            } catch {
                console.log('Error loading more words');
            }

        });


    } catch (error) {
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message}`;
        element.innerHTML = errorDisplay.outerHTML;
    }

    (async () => {
        try{
            const response = await fetch("https://api.ipify.org/");
            const ip = await response.text();
            console.log(ip);
        } catch {
            console.log('Error loading IP');
        }
    })()      
    
    const new_word_btn = document.querySelector('#create-word');
    new_word_btn.addEventListener('click', () => {
        getNewWord();
    });

}
