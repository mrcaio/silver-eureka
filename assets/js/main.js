const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-nav');
const yearOutput = document.getElementById('ano-atual');

if (yearOutput) {
    yearOutput.textContent = new Date().getFullYear();
}

if (navToggle && navigation) {
    navToggle.addEventListener('click', () => {
        const isOpen = navigation.dataset.open === 'true';
        navigation.dataset.open = (!isOpen).toString();
        navToggle.setAttribute('aria-expanded', (!isOpen).toString());
    });

    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.dataset.open = 'false';
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.card, .projeto, blockquote, .metrica').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
