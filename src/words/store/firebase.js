import { initializeApp } from "firebase/app";
const firebaseConfig = {
  "apiKey": "AIzaSyAjwflX81FvYK2lX8rHMy4tRhudMaEZM6o",
  "authDomain": "words-da603.firebaseapp.com",
  "databaseURL": "https://words-da603-default-rtdb.firebaseio.com",
  "projectId": "words-da603",
  "storageBucket": "words-da603.appspot.com",
  "messagingSenderId": "494004028134",
  "appId": "1:494004028134:web:490a1ea449ffde5eab7127"
}
export const firebase_start = () => {
  initializeApp(firebaseConfig);
  };

