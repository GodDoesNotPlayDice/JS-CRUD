import { getNewWord } from "../../words/store/get_new_word.store.js";
import { ip_encrypted } from "../../words/store/words.store.js";
import { invalid_input } from "../../words/use-cases/words-app.js";
export const modal_input = () => {
  const modal = document.querySelector(".modal");
  const btn = document.querySelector("#create-word");
  const close = document.querySelector(".close-modal");
  const input = document.querySelector("#new_words_text");
  // const create = document.querySelector("#create-btn");
  const form = document.querySelector("#new_words_form");
  const error = document.querySelector("#errors");

  let isAnimating = false; 

  const modal_animation = () => {
    if (isAnimating) return;
    isAnimating = true;
    if (modal.classList.contains("animate__zoomOut")) {
      modal.classList.remove("animate__zoomOut");
      modal.classList.remove("hidden");
      modal.classList.add("animate__zoomIn");
      isAnimating = false; // Animation complete
      input.focus();
    } else {
      modal.classList.add("animate__zoomOut");
      setTimeout(() => {
        modal.classList.add("hidden");
        isAnimating = false; // Animation complete
      }, 500);
      form.reset();
      error.classList.add("opacity-0");
    }
  };

  btn.addEventListener("click", modal_animation);
  close.addEventListener("click", modal_animation);

  const getIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org/");
      const ip = await response.text();
      return ip;
    } catch {
      console.log("Error loading IP");
      return null;
    }
  };

  const val_text = (value) => {

    let text = value.split(" ");
    text = text[0].trim()
    if (text === "") {
      error.classList.remove("opacity-0");
      error.innerHTML = "Please enter a word";
      return;
    } else if (text.length > 45) {
      error.classList.remove("opacity-0");
      error.innerHTML = "The word is too long";
      return;
    } else if (text.length < 3) {
      error.classList.remove("opacity-0");
      error.innerHTML = "The word is too short";
      return;
    } else {
      let regex = /^[a-zA-Z]+$/;
      if (!text.match(regex)) {
        error.classList.remove("opacity-0");
        error.innerHTML = "The word must be letters only";
        return;
      }
    }
    return true;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let flag = await invalid_input();
    if (flag){
      iziToast.error({
        title: 'Invalid',
        message: 'You already have a word!',
        position: 'topRight'
        });
    } else {
      const ipPromise = getIp();
      const formData = new FormData(form);
      const ip = await ipPromise;
      const encrypt_ip = await ip_encrypted(ip)
      const data = {
        ip: encrypt_ip,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      };
      for (const [key, value] of formData) {
        if (key === "word") {
          if(val_text(value)){
            data[key] = String(value.split(' ')[0].trim());
          }
          else{
            return;
          }
        }
      }
      getNewWord(data);
      modal_animation();
    }
  });
};
