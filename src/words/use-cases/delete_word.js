import { loadAllWords } from "../store/load_words";
import { getIp, ip_decrypted } from "../store/words.store";
import { hidden_delete_button } from "./words-app";
import { getDatabase, ref, remove} from "firebase/database";


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
    const db = getDatabase();
    remove(ref(db, `words/${uuid}`)).then(() => {}).catch((error) => {
        console.log(error);
    });
}