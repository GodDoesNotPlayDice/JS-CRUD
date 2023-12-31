export const scroll_hover = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        const elements = document.querySelectorAll('.element-text');
        const title = document.querySelector('.element-title');
        const github = document.querySelector('.git-hub-icon');
        if (window.scrollY > 95){
            header.classList.add('fixed', 'bg-purple-600', 'shadow-md');
            title.classList.replace('text-purple-500', 'text-white');
            github.classList.replace('text-purple-600','text-white');
            for (const element of elements) {
                element.classList.replace('lg:text-purple-500', 'lg:text-white');
                element.classList.replace('hover:bg-purple-600', 'hover:bg-white');
                element.classList.replace('hover:text-white', 'hover:text-purple-500');
            }
        } else if (window.scrollY == 0) {
            header.classList.remove('fixed', 'bg-purple-600', 'shadow-md');
            title.classList.replace('text-white', 'text-purple-500');
            github.classList.replace('text-white','text-purple-600');
            for (const element of elements) {
                element.classList.replace('lg:text-white', 'lg:text-purple-500');
                element.classList.replace('hover:bg-white', 'hover:bg-purple-600');
                element.classList.replace('hover:text-purple-500', 'hover:text-white');
            }
        }
    });
}