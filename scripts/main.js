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
const darkLightButtons = document.getElementsByClassName('dark-light-btn');

for (const btn of darkLightButtons) {
    btn.addEventListener('click', ()=> {
        document.querySelectorAll('link.css').forEach(ss => {
            ss.disabled = !ss.disabled;
        })
    });
}