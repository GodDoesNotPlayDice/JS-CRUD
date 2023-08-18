import { loadAllWords, loadWords } from "./load_words";

const state = {
    words : [],
}


export const ip_encrypted = async (ip) => {
  return CryptoJS.AES.encrypt(ip, import.meta.env.VITE_SECRET_KEY).toString();
}

export const ip_decrypted = async (ip) => {
  const decrypt = CryptoJS.AES.decrypt(ip, import.meta.env.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8);
  return decrypt;
}

export const getIp = async () => {
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
    const words = await loadWords();
    state.words = words;
};
const loadMoreWords = async () => {
    const words = await loadAllWords();
    state.words = words;
    return words;
}

const word_confirm = async () => {
  const words = await loadAllWords();
  const ip = await getIp();
  const decryptPromises = words.map(async (w) => {
    if (w.ip === 'NULL') {
      return false;
    }
    const decrypt = await ip_decrypted(w.ip);
    return decrypt === ip;
  });
  const results = await Promise.all(decryptPromises);
  const flag = results.includes(true);
  return flag;
}



export default{
    state,
    loadStationWords,
    loadMoreWords,
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

