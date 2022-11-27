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

// Replace navbar scrolling
const navAnchors = document.querySelectorAll('.nav__bar a');

navAnchors.forEach(nav => {
    nav.onclick = () => {
        document.getElementById('nav__buttons-mobile').classList.remove('show');
        setActive(nav);

        const id = nav.getAttribute('href').slice(1);
        if (id != '') {
            const scrollTo = document.getElementById(id);

            let offsetPosition = scrollTo.getBoundingClientRect().top;
            offsetPosition += window.pageYOffset;
            offsetPosition -= document.querySelector('.nav__bar').offsetHeight * 1.1;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            return false;
        }
    }
})

// Select navbar item
const sections = document.querySelectorAll('section');

function setActive(e) {
    navAnchors.forEach(nav => {
        nav.classList.remove('active__nav');
    })
    e.classList.add('active__nav');
}

document.onscroll = () => {
    const top = window.scrollY;
    sections.forEach( section => {
        if (top > section.offsetTop - 300 && top < section.offsetTop + section.offsetHeight) {
            const nav = document.querySelector("[href*='"+section.getAttribute('id')+"'");
            setActive(nav);
        }
    });
}