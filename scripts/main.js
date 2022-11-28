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
const navAnchors = document.querySelectorAll("a[href^='#']");

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
            const nav = document.querySelector(".nav__bar a[href*='"+section.getAttribute('id')+"'");
            setActive(nav);
        }
    });
}

// Typing effect
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typer", {
        lifeLike: true,
        loop: true,
        deleteSpeed: 75,
    })
    .type("Fullstack")
    .pause(2000)
    .delete()
    .pause(500)

    .type("React") 
    .pause(2000)
    .delete()
    .pause(500)

    .type("Angular")
    .pause(2000)
    .delete()
    .pause(500)

    .type("Node")
    .pause(2000)
    .delete()
    .pause(500)

    .type("C#")
    .pause(2000)
    .delete()
    .pause(500)

    .type("PHP")
    .pause(2000)
    .delete()
    .go()
});

// Reveal on Scroll
const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: true,
  });

sr.reveal(".front__name", {});
sr.reveal(".front__contact-anim", { interval: 200 });
sr.reveal(".front__social", { interval: 400 });
sr.reveal(".skills__category", {});
sr.reveal(".projects__list", {});
sr.reveal(".project__single", {});