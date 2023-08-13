import { loadWords } from "./load_words";

const state = {
    currentPage : 0,
    words : [],
}
let last_page = false;
const loadStationWords = async (btnload) => {
    const words = await loadWords(state.currentPage + 1);
    if (words.length === 0 && state.currentPage > 0) {
        btnload.classList.replace('bg-purple-600', 'bg-gray-400');
        btnload.classList.replace('hover:bg-purple-800', 'hover:bg-gray-400');
        btnload.classList.replace('cursor-pointer', 'cursor-not-allowed');
        if (last_page === false){
            state.currentPage += 1;
            state.words = words;
            last_page = true;
        }
    } else {
        state.currentPage += 1;
        state.words = words;
    }
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

