import { loadAllWords } from "../store/load_words";
import { getIp, ip_decrypted } from "../store/words.store";
import { hidden_delete_button } from "./words-app";

export const deleteWord = async () => {
    const words = await loadAllWords();
    const ip = await getIp();
    for (const w of words) {
        let decrypt = ip_decrypted(w.ip);
        if (await decrypt === ip) {
            await deleteWordEndpoint(w.uuid);
             hidden_delete_button();
        }
    }
}
const deleteWordEndpoint = async (uuid) => {
    const url = `${import.meta.env.VITE_BASE_URL}/Words/${uuid}`;
    const res = await fetch(url, {
        method: 'DELETE'
    })
    const deleteRes = await res.json();
    console.log(deleteRes);
    iziToast.success({
        title: 'Deleted',
        message: 'Successfully deleted',
        position: 'topRight'
        });
    return true;
}