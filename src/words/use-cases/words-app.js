
import { renderWords } from "../presentation/render-words";
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
                await wordsStore.loadStationWords(btnload);
                wordsStore.getCurrentPage();
                const words = wordsStore.getWords();
                let words_render = renderWords(words);
                for (let i = 0; i < words_render.length; i++) {
                    element.innerHTML += words_render[i];
                }
                words_render = []; 
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




}
