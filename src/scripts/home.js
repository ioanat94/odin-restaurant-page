import Header from '../images/header.jpg';
import dineIn from '../images/dine-in.png';
import delivery from '../images/delivery.png';
import cash from '../images/cash.png';
import credit from '../images/credit-card.png';

let content = document.getElementById('content');

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

const iconContainer = document.createElement('div');
iconContainer.id = 'icon-container';

const iconContainerLeft = document.createElement('div');
iconContainerLeft.classList.add('icon-container-half');
const iconContainerRight = document.createElement('div');
iconContainerRight.classList.add('icon-container-half');

const dineInIcon = new Image();
dineInIcon.src = dineIn;
dineInIcon.classList.add('icon');
const deliveryIcon = new Image();
deliveryIcon.src = delivery;
deliveryIcon.classList.add('icon');
const cashIcon = new Image();
cashIcon.src = cash;
cashIcon.classList.add('icon');
const creditIcon = new Image();
creditIcon.src = credit;
creditIcon.classList.add('icon');

const leftText = document.createElement('div');
leftText.classList.add('side-text');
leftText.textContent = 'Dine In or Delivery';
const rightText = document.createElement('div');
rightText.classList.add('side-text');
rightText.textContent = 'Cash or Credit Card';

iconContainerLeft.appendChild(dineInIcon);
iconContainerLeft.appendChild(deliveryIcon);
iconContainerLeft.appendChild(leftText);
iconContainerRight.appendChild(cashIcon);
iconContainerRight.appendChild(creditIcon);
iconContainerRight.appendChild(rightText);
iconContainer.appendChild(iconContainerLeft);
iconContainer.appendChild(iconContainerRight);

export default function loadHomePage() {
    content.classList.add('content-home');
    content.appendChild(myHeader);
    content.appendChild(myTitle);
    content.appendChild(myDescription);
    content.appendChild(iconContainer);
}