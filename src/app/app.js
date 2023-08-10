import index from './app.html?raw';
import words from './words.html?raw';
export const App = (elementID) => {
    document.querySelector(elementID).innerHTML = index;
    const menu_btns = document.querySelectorAll('.dinamic-link');
    for (const menu_btn of menu_btns) {
        console.log(menu_btn)
        menu_btn.addEventListener('click', () => {
            if (menu_btn.id === 'words') {
                document.querySelector(elementID).innerHTML = words;
            }
            else if (menu_btn.id === 'home'){
                console.log('home')
                document.querySelector(elementID).innerHTML = index;
            }
        });
    }
    const btn = document.querySelector('#menu');
    const menu = document.querySelector('#menu-group');
    const close = document.querySelector('#close');

    btn.addEventListener('click', () => {
        menu.classList.replace('-right-96', 'right-0');
    });
    close.addEventListener('click', () => {
        menu.classList.replace('right-0', '-right-96');
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        const elements = document.querySelectorAll('.element-text');
        const title = document.querySelector('.element-title');
        if (window.scrollY > 0){
            header.classList.add('fixed', 'bg-purple-600', 'shadow-md');
            title.classList.replace('text-purple-500', 'text-white');
            btn.classList.replace('text-purple-600','text-white');
            for (const element of elements) {
                element.classList.replace('lg:text-purple-500', 'lg:text-white');
                element.classList.replace('hover:bg-purple-600', 'hover:bg-white');
                element.classList.replace('hover:text-white', 'hover:text-purple-500');
            }
        } else {
            header.classList.remove('fixed', 'bg-purple-600', 'shadow-md');
            title.classList.replace('text-white', 'text-purple-500');
            btn.classList.replace('text-white','text-purple-600');
            for (const element of elements) {
                element.classList.replace('lg:text-white', 'lg:text-purple-500');
                element.classList.replace('hover:bg-white', 'hover:bg-purple-600');
                element.classList.replace('hover:text-purple-500', 'hover:text-white');
            }
        }
    });
}

