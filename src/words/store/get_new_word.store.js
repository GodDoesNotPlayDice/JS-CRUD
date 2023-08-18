import { Word } from "../models/words.model";
import { load_more_words } from "../use-cases/words-app";
import { getDatabase, ref, set, update } from "firebase/database";
import { firebase_start } from "./firebase.js";
firebase_start();

export const getNewWord = async (data) => {
  let word = new Word(data);
  try{
      const newWord = await set(ref(getDatabase(), `words/${word.uuid}`), word);
      load_more_words(document.querySelector(".words-container "));
      iziToast.success({
        title: "Added",
        message: "Successfully added!",
        position: "topRight",
      });
      return newWord;
  } catch (error) {
        console.log(error);
        iziToast.error({
            title: "Error",
            message: "Error adding word!",
            position: "topRight",
        });
  }
};

export const reAsingIp = async (data) => {
  let word = new Word(data);
  try{
      const newWord = await update(ref(getDatabase(), `words/${word.uuid}`), {
        ip: word.ip,
      });
      load_more_words(document.querySelector(".words-container "));
      iziToast.success({
        title: "Added",
        message: "Successfully added!",
        position: "topRight",
      });
      return newWord;
  } catch (error) {
        console.log(error);
        iziToast.error({
            title: "Error",
            message: "Error adding word!",
            position: "topRight",
        });
  }
};
