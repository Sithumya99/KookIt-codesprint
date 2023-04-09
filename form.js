const loginBtn = document.querySelector('.login');
const startBtn = document.querySelector('.start');
const dialogEl = document.querySelector('#dialog-form');
const signUp = document.querySelector('.sign-up-btn');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginLink = document.querySelector('.have-account a');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', openForm);
startBtn.addEventListener('click', openForm);
signUp.addEventListener('click', (e) => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
    e.preventDefault();
});
loginLink.addEventListener('click', (e) => {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    e.preventDefault();
});
closeBtn.addEventListener('click', (e) => {
    dialogEl.close();
});

function openForm(){
    dialogEl.showModal();
};