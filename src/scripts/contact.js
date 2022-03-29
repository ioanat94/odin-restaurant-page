let content = document.getElementById('content');

const contactHeader = document.createElement('div');
contactHeader.id = 'contact-header';
contactHeader.textContent = 'Contact us';
const contactSub = document.createElement('div');
contactSub.id = 'contact-sub';
contactSub.textContent = 'Get in touch for deliveries, reservations, questions or suggestions!';

const address = document.createElement('div');
address.classList.add('info-header');
address.textContent = 'Address';
const addressSub = document.createElement('div');
addressSub.classList.add('info-sub');
addressSub.textContent = 'Grub Str. 30, Los Angeles, California, 56789';

const phoneNumber = document.createElement('div');
phoneNumber.textContent = 'Phone';
phoneNumber.classList.add('info-header');
const phoneNumberSub = document.createElement('div');
phoneNumberSub.classList.add('info-sub');
phoneNumberSub.textContent = '555-123-4567';

const email = document.createElement('div');
email.classList.add('info-header');
email.textContent = 'Email';
const emailSub = document.createElement('div');
emailSub.classList.add('info-sub');
emailSub.textContent = 'grubhub@grublord.com';

const formContainer = document.createElement('form');
formContainer.action = '';
formContainer.id = 'contact-form';

const formNameLabel = document.createElement('label');
formNameLabel.for = 'form-name';
formNameLabel.textContent = 'Name';
const formName = document.createElement('input');
formName.type = 'text';
formName.id = 'form-name';

const formEmailLabel = document.createElement('label');
formEmailLabel.id = 'email-label';
formEmailLabel.for = 'form-email';
formEmailLabel.textContent = 'Email';
const formEmail = document.createElement('input');
formEmail.type = 'email';
formEmail.id = 'form-email';

const formSubjectLabel = document.createElement('label');
formSubjectLabel.for = 'form-subject';
formSubjectLabel.textContent = 'Subject';
const formSubject = document.createElement('input');
formSubject.type = 'text';
formSubject.id = 'form-subject';

const formMessageLabel = document.createElement('label');
formMessageLabel.for = 'form-message';
formMessageLabel.textContent = 'Message';
const formMessage = document.createElement('textarea');
formMessage.id = 'form-message';

const formSend = document.createElement('button');
formSend.textContent = 'Send';
formSend.id = 'form-send';
formSend.type = 'button';

formContainer.appendChild(formNameLabel);
formContainer.appendChild(formName);
formContainer.appendChild(formEmailLabel);
formContainer.appendChild(formEmail);
formContainer.appendChild(formSubjectLabel);
formContainer.appendChild(formSubject);
formContainer.appendChild(formMessageLabel);
formContainer.appendChild(formMessage);
formContainer.appendChild(formSend);

export default function loadContactPage() {
    content.classList.add('content-contact');
    content.appendChild(contactHeader);
    content.appendChild(contactSub);
    content.appendChild(address);
    content.appendChild(addressSub);
    content.appendChild(phoneNumber);
    content.appendChild(phoneNumberSub);
    content.appendChild(email);
    content.appendChild(emailSub);
    content.appendChild(formContainer);
}