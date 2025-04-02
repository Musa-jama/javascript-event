const mouseBtn = document.getElementById('mouseBtn');
const mouseMessage = document.getElementById('mouseMessage');

mouseBtn.addEventListener('mouseenter', () => {
    mouseMessage.textContent = 'Mouse is over the button!';
});

mouseBtn.addEventListener('mouseleave', () => {
    mouseMessage.textContent = 'Move the mouse over the button!';
});


const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');

keyInput.addEventListener('keyup', (event) => {
    keyOutput.textContent = event.key;
});


const form = document.getElementById('simpleForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    formMessage.textContent = 'Form submitted successfully!';
});


const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused!';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Click the input field';
});


const buttonContainer = document.getElementById('buttonContainer');
const buttonMessage = document.getElementById('buttonMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        buttonMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});
