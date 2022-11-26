// Open Mobile Menu
const openMenu = document.getElementById('open-menu');

openMenu.addEventListener('click', ()=> {
    var menuMobile = document.getElementById('nav__buttons-mobile');
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
    } else {
        menuMobile.classList.add('show');
    }
});

// Change website theme
const darkLightButton = document.getElementById('dark-light-btn');

function ChangeTheme(e) {
    if (e.classList.contains('dark-mode')) {
        e.classList.remove('dark-mode');
        e.classList.add('light-mode');
    } else {
        e.classList.remove('light-mode');
        e.classList.add('dark-mode');
    }
}

darkLightButton.addEventListener('click', ()=> {
    ChangeTheme(document.getElementById('nav__buttons-mobile'));
    ChangeTheme(document.getElementsByClassName('nav__bar')[0]);
});