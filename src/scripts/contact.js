let content = document.getElementById('content');

const contactHeader = document.createElement('div');
contactHeader.textContent = 'CONTACT US';
const contactSub = document.createElement('div');
contactSub.textContent = 'Get in touch for deliveries, reservations, questions or suggestions!';

const address = document.createElement('div');
address.textContent = 'ADDRESS';
const addressSub = document.createElement('div');
addressSub.textContent = 'Grub Str 30, Los Angeles, California 56789';

const phoneNumber = document.createElement('div');
phoneNumber.textContent = 'PHONE';
const phoneNumberSub = document.createElement('div');
phoneNumberSub.textContent = '555-123-4567';

const email = document.createElement('div');
email.textContent = 'EMAIL';
const emailSub = document.createElement('div');
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

formContainer.appendChild(formNameLabel);
formContainer.appendChild(formName);
formContainer.appendChild(formEmailLabel);
formContainer.appendChild(formEmail);
formContainer.appendChild(formSubjectLabel);
formContainer.appendChild(formSubject);
formContainer.appendChild(formMessageLabel);
formContainer.appendChild(formMessage);

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