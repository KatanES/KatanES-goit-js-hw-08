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
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Please fill all fealds!');
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  localStorage.removeItem(keyEl);
  emailInput.value = '';
  messageInput.value = '';
});
