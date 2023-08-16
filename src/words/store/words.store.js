import { loadWords } from "./load_words";

const state = {
    currentPage : 0,
    words : [],
}
const loadStationWords = async () => {
    const words = await loadWords(state.currentPage + 1);
    state.currentPage += 1;
    state.words = words;
};

const loadMoreWords = async () => {
    let total_words = [];
    while (true) {
        const words = await loadWords(state.currentPage + 1);
        if (words.length === 0) {
            document.querySelector('.loadMore');
            break;
        }
        total_words.push(...words);
        state.currentPage += 1;
    }
    state.words = total_words;
}

const reloadWords = async () => {
    state.currentPage = 0;
    state.words = [];
    await loadStationWords();
}

export default{
    state,
    loadStationWords,
    loadMoreWords,
    reloadWords,
    /**
     * 
     * @returns {Word[]}
     */
    getWords: () => [...state.words],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}

