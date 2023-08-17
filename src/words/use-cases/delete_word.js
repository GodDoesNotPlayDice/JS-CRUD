import { loadAllWords } from "../store/load_words";
import { getIp } from "../store/words.store";
import { hidden_delete_button } from "./words-app";

export const deleteWord = async () => {
    const words = await loadAllWords();
    const ip = await getIp();
    for (const w of words) {
        if (w.ip === ip) {
            await deleteWordEndpoint(w.ip);
             hidden_delete_button();
        }
    }
}
const deleteWordEndpoint = async (ip) => {
    const url = `${import.meta.env.VITE_BASE_URL}/Words/${ip}`;
    const res = await fetch(url, {
        method: 'DELETE'
    })
    const deleteRes = await res.json();
    console.log(deleteRes);
    return true;
}