'use strict'; 
{
    const menuIcon = document.getElementById('lines');
    const menus = document.getElementById('menus');
    menuIcon.addEventListener('click', () => {
        menus.classList.toggle('change');
    })

    const page = document.getElementById('page')
    page.addEventListener('click', () => {
        scrollTo((0, 0), 0);
    });
}