const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Open/close the mobile menu by toggling the "open" class (styled in style.css)
function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen); // lets screen readers know the state
}

hamburger.addEventListener('click', toggleMenu);

// Close the menu after tapping any link inside it
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});
