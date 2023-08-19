
import { renderWords } from "../presentation/render-words";
import { reAsingIp } from "../store/get_new_word.store";
import { loadAllWords } from "../store/load_words";
import wordsStore, { getIp } from "../store/words.store";
import { deleteWord } from "./delete_word";
import { ip_decrypted } from "../store/words.store";



const removeIp = async () => {
    const words = await loadAllWords();
    const w_date = words.some(w => String(w.date) < `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);
    const get_words_ip = words.filter(w => String(w.date) < `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}` );
    if (w_date){
        get_words_ip.forEach(async (w) => {
            console.log(w)
           await reAsingIp(w);
        });
    }
}



export const invalid_input = async () => {
    const words = await loadAllWords();
    const ip = await getIp();
    const decryptPromises = words.map(async (w) => {
        if (w.ip === 'NULL') {
            return false;
        }
        const decrypt = await ip_decrypted(w.ip);
        return decrypt === ip;
    });
    const results = await Promise.all(decryptPromises);
    const w_ip = results.includes(true);
    const w_date = words.some(w => String(w.date) == `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}` );
    if (w_ip && w_date ) {
        return true; 
    } else {
        return false;
    }
}

const loading = () => {
    const load = document.createElement('div');
    load.innerHTML = 
    `
    <div class="loader my-8">
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
    </div>
    `;
    return load;
}

const load_delete_button =  async () => {
    const flag = await wordsStore.word_confirm();
    if (flag) {
        const btn = document.querySelector('#delete-words')
        btn.classList.replace('hidden', 'flex');
    }
    return;
}

export const hidden_delete_button = () => {
    const btn = document.querySelector('#delete-words')
    btn.classList.replace('flex', 'hidden');
    return;
}



const render_words = async (element) => {
    const load = loading(element)
    element.append(load)
    try {
        await wordsStore.loadStationWords();
        load.remove()
        const words = wordsStore.getWords();
        let words_render = renderWords(words);
        words_render.forEach(word => {
            element.innerHTML += word;
        });
        
        Swal.fire(
            'Welcome!',
            'This web you can add a word a day and see the words of other people!, you can add a word every 24 hours!, enjoy!',
            'success'
          )
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Server does not respond!',
            footer: 'if you have a problem contact me! #Discord: goddoesnotplaydice'
          })
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('text-center' ,'lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message} Maybe the DB is not working!`;
        element.innerHTML = errorDisplay.outerHTML;
        document.querySelector('.loadMore').remove();
    } 
}

const reload_style = () => {
    document.querySelector('.reload_icon').classList.replace('fa-spinner', 'fa-rotate-right');
    document.querySelector('.reload_text').innerHTML = 'Reload';

}
const reload_style_timmer = () => {
    let btn = document.querySelector('.loadMore_btn');
    let btn_text = document.querySelector('.reload_text');
    let btn_icon = document.querySelector('.reload_icon');
    document.querySelector('.loadMore-block').classList.toggle('hidden');
    btn.classList.replace('bg-purple-800', 'bg-gray-700');
    btn.classList.replace('hover:bg-purple-700', 'hover:bg-gray-600');
    btn_icon.classList.replace('fa-spinner', 'fa-rotate-right');
    btn_icon.classList.add('animate-spin');
    btn_text.innerHTML = 'Reload';
    iziToast.warning({
        title: 'Warning Reload',
        message: "You can't reload too fast!",
        position: "topRight"
    });
    setTimeout(() => {
        document.querySelector('.loadMore-block').classList.toggle('hidden');
        btn.classList.replace('bg-gray-700', 'bg-purple-800');
        btn.classList.replace('hover:bg-gray-600', 'hover:bg-purple-700');
        btn_icon.classList.replace('fa-spinner', 'fa-rotate-right');
        btn_icon.classList.remove('animate-spin');
        btn_text.innerHTML = 'Reload';
    }, 5000);
};

let click = 0;
export const load_more_words = async (element) => {
    const load = loading(element);
    element.insertAdjacentElement('afterend', load);
    try {
        await wordsStore.loadMoreWords();
        const words = wordsStore.getWords();
        let words_render = renderWords(words);
        element.innerHTML = ''
        words_render.forEach(word => {
            element.innerHTML += word;
        });
        if (click > 1){
            reload_style_timmer();
            click = 0;
        } else{
            reload_style();
            click++;
            iziToast.info({
                title: 'Reload',
                message: 'Successfully Reloaded!',
                position: 'topRight'
            });
        }
        load_delete_button();
        load.remove();
    } catch (error) {
        const errorDisplay = document.createElement('h3');
        errorDisplay.classList.add('text-center', 'lg:text-2xl', 'text-xl', 'py-2', 'font-medium', 'text-red-500');
        errorDisplay.innerHTML = `Error loading words: ${error.message}`;
        element.innerHTML = errorDisplay.outerHTML;
        document.querySelector('.loadMore').remove();
    }
}



export const WordsApp = async (element) => {
    try {
        await render_words(element);
        await load_delete_button();
        await removeIp();
    } catch (error) {}

    try{
        const loadMore = document.querySelector('.loadMore');
        loadMore.addEventListener('click', async () => {
            await load_more_words(element);
        })
    } catch (error) {
        console.log(error);
    }

    try{
        const deleteWord_btn = document.querySelector('#delete-words');
        deleteWord_btn.addEventListener('click', async () => {
            await deleteWord();
            await load_more_words(element);
        });
    } catch (error) {
        console.log(error);
    }


}

