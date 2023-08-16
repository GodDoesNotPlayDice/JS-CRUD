import wordsStore from "../store/words.store";
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
        const {ip: w_ip} = word
        if (w_ip === ip) {
           new_word = `<div class=" ${color} p-2 lg:p-3 rounded-lg m-1 hover:scale-105 hover:transition-all transition-all flex items-center group">
                <div class="flex">
                    <p class="element-title text-sm lg:text-xl font-medium text-white">${word.word}</p>
                </div>
                    <div class="bg-red-600 mx-2 cursor-pointer rounded-md p-1 h-0 w-0 overflow-hidden group-hover:w-auto group-hover:h-auto transition-all group-hover:transition-all">
                    <p class="text-white font-medium">Delete</p>
                </div>
                </div>
            </div>`
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