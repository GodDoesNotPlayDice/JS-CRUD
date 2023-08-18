import { Word } from "../models/words.model";
import { load_more_words } from "../use-cases/words-app";

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
    iziToast.success({
    title: 'Added',
    message: 'Successfully added!',
    position: 'topRight'
    });
    return get_res;
}



export const reAsingIp = async (data) => {
    const {word, ip, date, uuid} = data;
    const url = `${import.meta.env.VITE_BASE_URL}/Words/${uuid}`;
    let new_data = {word: word, ip: "NULL", date: date, uuid: uuid}
    const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(new_data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const get_res = await res.json()
    return get_res;
}