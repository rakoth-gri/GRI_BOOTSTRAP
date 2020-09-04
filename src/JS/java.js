window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuLINK = document.querySelectorAll('.menu-link'),
    mobile_button = document.querySelector('.mobile_button');

    mobile_button.addEventListener('click', () => {
        mobile_button.classList.toggle('mobile_active');
        menu.classList.toggle('menu-active');
    });

    menuLINK.forEach(item => {
        item.addEventListener('click', () => {
            mobile_button.classList.toggle('mobile_active');
            menu.classList.toggle('menu-active');
        })
    })
})