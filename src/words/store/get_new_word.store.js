import { Word } from "../models/words.model";
import { load_more_words } from "../use-cases/words-app";
// import { render_words } from "../use-cases/words-app";

export const getNewWord = async (data) => {
    let word = new Word(data)
    const url = `${import.meta.env.VITE_BASE_URL}/Words`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {
            'Content-Type': 'application/json'
        },

    })
    const get_res = res.json()
   load_more_words(document.querySelector('.words-container '));
    return get_res;
}