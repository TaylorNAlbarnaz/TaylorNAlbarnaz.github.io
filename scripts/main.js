const navMenu = $('#nav-menu');
const navToggle = $('#nav-toggle');
const navClose = $('#nav-close');

// Opens Menu
if (navToggle) {
    navToggle.click(()=> {
        navMenu.addClass('show-menu');
    })
}

// Closes Menu
if (navClose) {
    navClose.click(()=> {
        navMenu.removeClass('show-menu');
    })
}

// Closes menu from Nav Items
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.removeClass('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));