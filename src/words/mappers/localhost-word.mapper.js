import { Word } from "../models/words.model"
/**
 * 
 * @param {Like<Word>} localhostword 
 * @returns {Word}
 */
export const localhostWordToModel = (localhostword) => {
    const { word, ip, date, uuid} = localhostword
    return new Word({
        word,
        ip,
        date,
        uuid,
    })

}