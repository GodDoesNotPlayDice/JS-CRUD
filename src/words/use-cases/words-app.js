
import { renderWords } from "../presentation/render-words";
import wordsStore from "../store/words.store";


const loading = (element) => {
    const load = document.createElement('div');
    load.innerHTML = 
    `
    <div class="loader my-8">
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
    </div>
    `;
    return load;
}


const render_words = async (element) => {
    const load = loading(element)
    element.append(load)
    try {
        await wordsStore.loadStationWords();
        load.remove()
        const words = wordsStore.getWords();
        let words_render = renderWords(words);
        words_render.forEach(word => {
            element.innerHTML += word;
        });
    } catch (error) {
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('text-center' ,'lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message}`;
        element.innerHTML = errorDisplay.outerHTML;
        document.querySelector('.loadMore').remove();
    } 
}



const load_more_words = async (element) => {
    const load = loading(element);
    element.insertAdjacentElement('afterend', load);
    try {
        await wordsStore.loadMoreWords();
        const words = wordsStore.getWords();
        let words_render = renderWords(words);

        words_render.forEach(word => {
            element.innerHTML += word;
        });

        load.remove();
    } catch (error) {
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('text-center', 'lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message}`;
        element.innerHTML = errorDisplay.outerHTML;
        document.querySelector('.loadMore').remove();
    }
}

let lastButtonClickTime = 0;
const reload_words = async (element) => {
    const currentTime = Date.now();
    if (currentTime - lastButtonClickTime < 10 * 60 * 1000) {
        document.querySelector('.reloadStyles').classList.replace('bg-purple-600', 'bg-gray-400');
        document.querySelector('.reloadStyles').classList.replace('hover:bg-purple-800', 'hover:bg-gray-400');
        document.querySelector('.reloadStyles').classList.replace('cursor-pointer', 'cursor-not-allowed');
        document.querySelector('.reload_text').innerHTML = `Wait 10 minutes to reload`;
        return;
    }
    lastButtonClickTime = currentTime;
    const load = loading(element);
    element.insertAdjacentElement('afterend', load);
    try {
        await wordsStore.reloadWords();
        const words = wordsStore.getWords();
        let words_render = renderWords(words);
        element.innerHTML = ''
        words_render.forEach(word => {
            element.innerHTML += word;
        });

        load.remove();
    } catch (error) {
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('text-center', 'lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message}`;
        element.innerHTML = errorDisplay.outerHTML;
        document.querySelector('.loadMore').remove();
    }
}



export const WordsApp = async (element) => {
    try {
        await render_words(element);
    } catch (error) {
        console.log(error);
    }

    try{
        const loadMore = document.querySelector('.loadMore');
        loadMore.addEventListener('click', async () => {
            await load_more_words(element);
            loadMore.classList.add('hidden');
            document.querySelector('.reload').classList.remove('hidden');
        })
    } catch (error) {
        console.log(error);
    }

    try{
        const reloadButton = document.querySelector('.reload');
        reloadButton.addEventListener('click', async () => {
            await reload_words(element, reloadButton);
        });
    } catch (error) {
        console.log(error);
    }

}

