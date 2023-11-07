import { throttle } from 'lodash.throttle';


// Urmăriți evenimentul de input pentru salvarea datelor folosind throttle
emailInput.addEventListener('input', saveDataWithThrottle);
messageInput.addEventListener('input', saveDataWithThrottle);

const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

// Verificați starea storage-ului la încărcarea paginii
window.addEventListener('load', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
});

// Ascultați evenimentul de submit al formularului
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    const data = { email, message };
    console.log(data);

    // Ștergeți câmpurile din local storage după ce ați trimis formularul
    localStorage.removeItem('feedback-form-state');
});

function saveData() {
    const email = emailInput.value;
    const message = messageInput.value;
    const data = { email, message };

    // Salvați obiectul în local storage
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

// Utilizați throttle pentru a actualiza datele o dată la 500 de milisecunde
const saveDataWithThrottle = throttle(saveData, 500);
