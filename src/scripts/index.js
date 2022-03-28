import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';
import '../styles.css';

loadHomePage();

let homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', function() {
    let content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.innerHTML = '';
    loadHomePage();
});

let menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function() {
    let content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.innerHTML = '';
    loadMenuPage();
});

let contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', function() {
    let content = document.getElementById('content');
    content.classList.remove(...content.classList);
    content.innerHTML = '';
    loadContactPage();
});