import { Word } from "../models/words.model"
/**
 * 
 * @param {Like<Word>} localhostword 
 * @returns {Word}
 */
export const localhostWordToModel = (localhostword) => {
    const { word, ip, date } = localhostword
    return new Word({
        word,
        ip,
        date
    })
}