const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form, textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправить форму');
  evt.currentTarget.reset();
};

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  localStorage.setItem('feadback-form-state', message);
};

function populateTextarea() {
  const saveMessage = localStorage.getItem('feadback-form-state');

  if (saveMessage) {
    console.log(saveMessage);
    textarea.value = saveMessage;
  }
};
