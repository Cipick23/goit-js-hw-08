import throttle from 'lodash.throttle';

const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

const saveDataWithThrottle = throttle(saveData, 500);

emailInput.addEventListener('input', saveDataWithThrottle);
messageInput.addEventListener('input', saveDataWithThrottle);

window.addEventListener('load', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
});

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    const data = { email, message };
    console.log(data);

    localStorage.removeItem('feedback-form-state');
});

function saveData() {
    const email = emailInput.value;
    const message = messageInput.value;
    const data = { email, message };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
