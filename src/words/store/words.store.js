import { loadAllWords, loadWords } from "./load_words";

const state = {
    currentPage : 0,
    words : [],
}

const getIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org/");
      const ip = await response.text();
      return ip;
    } catch {
      console.log("Error loading IP");
      return null;
    }
  };

const loadStationWords = async () => {
    const words = await loadWords(state.currentPage + 1);
    state.currentPage += 1;
    state.words = words;
};

const loadMoreWords = async () => {
    let total_words = [];
    const words = await loadAllWords();
    total_words.push(...words);
    state.currentPage += 1;
    state.words = total_words;
    return total_words;
}


const word_confirm = async () => {
    const word = await loadAllWords();
    const ip = await getIp();
    word.forEach(w => {
        if (String(w.ip) === ip) {
            console.log(w.ip)
            return true;
        }
    })
    return false;
}

const reloadWords = async () => {

    
};

export default{
    state,
    loadStationWords,
    loadMoreWords,
    reloadWords,
    word_confirm,
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

