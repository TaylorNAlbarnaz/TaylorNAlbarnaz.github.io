const navMenu = $('#nav-menu');
const navToggle = $('#nav-toggle');
const navClose = $('#nav-close');

// Opens/Closes Menu
if (navToggle) {
    navToggle.click(()=> {
        navMenu.addClass('show-menu');
    })
}

if (navClose) {
    navClose.click(()=> {
        navMenu.removeClass('show-menu');
    })
}

// Closes menu from Nav Items
const navLink = $('.nav__link');

navLink.each(function () {
    $(this).click(function() {
        navMenu.removeClass('show-menu');
    });
});


// Open/Closes SKills Section
const skillsContent = $('.skills__content');
const skillsHeader = $('.skills__header');

console.log('1');

function toggleSkills(e) {
    const skillsParent = $(e.currentTarget).parent();

    skillsContent.each(function() {
        $(this).removeClass('skills__open');
        $(this).addClass('skills__close');
    })
    
    if (skillsParent.hasClass('skills__close')) {
        skillsParent.removeClass('skills__close')
        skillsParent.addClass('skills__open');
    }
}

skillsHeader.each(function() {
    console.log('8');

    $(this).on("click", function(e){
        console.log('9');
        toggleSkills(e);
    });
})

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});