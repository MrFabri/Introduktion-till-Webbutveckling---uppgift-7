const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#close-menu');
const body = document.body;

let open = false;

hamburger.addEventListener('click', () => {
    menu.classList.add('show-menu');
    body.style.overflow = 'hidden';
    open = true;
});

closeBtn.addEventListener('click', () => {
    if (open) {
        menu.classList.remove('show-menu');
        body.style.overflow = 'auto';
    }
});

const menuItems = menu.getElementsByTagName('a');
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', () => close());
}

function close() {
    if (open) {
        menu.classList.remove('show-menu');
        body.style.overflow = 'auto';

        setTimeout(() => {
            let y = window.scrollY - 200;
            console.log(window.scrollY, y)
            window.scrollTo(0, y)
        }, 100)

        open = false;
    }
}