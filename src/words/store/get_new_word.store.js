import { Word } from "../models/words.model";

export const getNewWord = async (data) => {
    let word = new Word(data)
    const url = `${import.meta.env.VITE_BASE_URL}/Words`;
    console.log(word)
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(word),
        headers: {
            'Content-Type': 'application/json'
        },

    })
    const get_res = res.json()
    return get_res;
}