import { loadWords } from "./load_words";

const state = {
    currentPage : 0,
    words : [],
}

const loadStationWords = async () => {
    const words = await loadWords(state.currentPage + 1);
    console.log(words);
    if (words.length === 0) return;
    state.currentPage += 1;
    state.words = words;
};

const onWordChange = async () => {
    throw new Error('Not implemented');
};

const reloadPage = async () => {
    throw new Error('Not implemented');
};


export default{
    state,
    loadStationWords,
    onWordChange,
    reloadPage,
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

