import Header from './header.jpg';

let content = document.getElementById('content');
content.classList.add('content-home');

const myHeader = new Image();
myHeader.src = Header;
myHeader.id = 'header-img';
myHeader.alt = 'Restaurant header image';

const myTitle = document.createElement('div');
myTitle.id = 'title';
myTitle.textContent = 'Grub Lord';

const myDescription = document.createElement('div');
myDescription.id = 'description';
myDescription.textContent = 'We serve authentic traditional American cuisine in a contemporary setting, especially suited to a special occasion. The staff and the ambience are always warm and welcoming.';

const copyright = document.createElement('a');
copyright.href = 'https://www.freepik.com/psd/mockup';
copyright.id = 'copyright';
copyright.textContent = 'Mockup psd created by freepik - www.freepik.com';

export default function loadHomePage() {
    content.appendChild(myHeader);
    content.appendChild(myTitle);
    content.appendChild(myDescription);
    content.appendChild(copyright);
}