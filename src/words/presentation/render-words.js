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

const ip = await getIp();
export const renderWords = (words) => {
    let wordsList = []
    words.forEach(word => {
        const colors = [
            'bg-purple-600',
            'bg-green-600',
            'bg-yellow-600',
            'bg-red-600',
            'bg-blue-600',
            'bg-pink-600',
            'bg-cyan-600',
            'bg-orange-600',
            'bg-lime-600'
        ];
        const random_int = Math.floor(Math.random() * colors.length);
        const color = colors[random_int];
        let new_word;
        let btn;
        const {ip: w_ip} = word
        if (w_ip === ip) {
           btn = `<div class="flex justify-start">
           <div id="delete-word" class="animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-4 lg:right-0 fixed bottom-36 flex justify-center items-center bg-red-800 bg-opacity-95 rounded-full hover:bg-red-700 cursor-pointer">
               <i class="fa-solid cursor-pointer fa-trash text-white"></i>
               <p class="transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2">Delete your word</p>
           </div>                        
       </div>`
       document.querySelector('#buttons-cont').innerHTML += btn;
        new_word = `
        <div class=" ${color} p-2 lg:p-3 rounded-lg m-1 hover:scale-105 hover:transition-all transition-all flex items-center">
            <p class="element-title text-sm lg:text-xl font-medium text-white">${word.word}</p>
        </div>`;
        } else{
            new_word = `
            <div class=" ${color} p-2 lg:p-3 rounded-lg m-1 hover:scale-105 hover:transition-all transition-all flex items-center">
                <p class="element-title text-sm lg:text-xl font-medium text-white">${word.word}</p>
            </div>`;
        }

        wordsList.push(new_word);
    });    

    return wordsList
}