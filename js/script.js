'use strict'

const allSections = document.querySelectorAll('.section');


// Smooth Scrolling NAV
document.querySelector('.navigation').addEventListener('click', function(e){
    e.preventDefault();

    if(e.target.closest('a').classList.contains('navigation-link')) {
        const id = e.target.closest('a').getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

// Smooth Scrolling MoreWords
document.querySelector('.btn-more-words').addEventListener('click', function(e){
    e.preventDefault();


    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
})


// Section Revealing

const revealSection = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
})

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden')
})