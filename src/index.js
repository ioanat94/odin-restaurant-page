import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import './styles.css';

loadHomePage();

let menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', function() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    loadMenuPage();
});