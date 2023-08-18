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
        new_word = `<div class=" ${color} p-3 rounded-lg m-1 hover:scale-105 hover:transition-all transition-all flex items-center">
                <p class="element-title text-xl lg:text-xl font-medium text-white">${word.word}</p>
            </div>`;
        wordsList.push(new_word);
    });    

    return wordsList
}