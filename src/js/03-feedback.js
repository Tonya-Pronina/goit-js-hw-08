import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');
const LOCALSTORAGE_KEY = 'feedback-form-state';


updateInput();
feedbackForm.addEventListener('input', throttle(onSaveStorage, 500));


function onSaveStorage() {
    const feedbackFormValue = {
      email: email.value,
      message: message.value,
    };
  
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormValue));
  };


feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  
    const storageValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
  
    if (!storageValue.email || !storageValue.message) {
      alert('Please fill in all the fields!');
    } else {
      console.log(storageValue);
  
      localStorage.removeItem(LOCALSTORAGE_KEY);
      feedbackForm.reset();
    }
  };

function updateInput() {
    const storageValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
  
    const emailValue = storageValue.email || '';
    email.value = emailValue;
  
    const messageValue = storageValue.message || '';
    message.value = messageValue;
  };
  