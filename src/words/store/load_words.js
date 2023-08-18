import { getDatabase, ref, child, get } from "firebase/database";
import { firebase_start } from "./firebase.js";
firebase_start();
/**
 *
 * @param {Number} page
 * @returns {Promise<Word[]>}
 */

const dbRef = ref(getDatabase());
export const loadWords = async () => {
    const get_words = await get(child(dbRef, 'words'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } 
      })
      .catch((error) => {
        console.error(error);
      });
  
    try {
      const uuids = Object.keys(get_words); // Obtener todas las claves UUIDs
      const result = uuids.map((uuid) => get_words[uuid]); // Obtener los valores correspondientes
      return result.slice(0, 10); // Devolver los primeros 10 elementos
    } catch {
      return [].slice(0, 10); // Manejar el caso si no hay datos o algún otro error
    }
  };
  

export const loadAllWords = async () => {
    const get_words = await get(child(dbRef, 'words'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => {
      console.error(error);
    });

  try {
    const uuids = Object.keys(get_words);
    const result = uuids.map((uuid) => get_words[uuid]);
    return result;
  } catch {
    return [];
  }
};
