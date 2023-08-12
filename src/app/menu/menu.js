export const f_menu = () => {
    const open = document.querySelector('#menu');
    const menu = document.querySelector('#menu-group');
    const close = document.querySelector('#close');
    open.addEventListener('click', () => {
        menu.classList.replace('-right-96', 'right-0');
    });
    close.addEventListener('click', () => {
        menu.classList.replace('right-0', '-right-96');
    });
};