import { localhostWordToModel } from "../mappers/localhost-word.mapper";
import { Word } from "../models/words.model";
/**
 * 
 * @param {Number} page 
 * @returns {Promise<Word[]>}
 */
export const loadWords = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const words = data.map(wordLike => localhostWordToModel(wordLike));
    return words;
}