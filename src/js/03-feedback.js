import throttle from 'lodash.throttle';
const keyEl = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const storage = () => {
  const input = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(keyEl, JSON.stringify(input));
};

form.addEventListener('input', throttle(storage, 500));

window.addEventListener('load', function () {
  const data = JSON.parse(localStorage.getItem(keyEl)) || {};
  if (data) {
    emailInput.value = data.email || '';
    messageInput.value = data.message || '';
  } else {
    alert('Fill all fields!');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  localStorage.removeItem(keyEl);
  emailInput.value = '';
  messageInput.value = '';

  //   form.reset();
});

// const LOCAL_KEY = 'feedback-form-state';

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(onInputData, 500));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// }
