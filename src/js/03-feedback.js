import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('feedback-form, textarea');

const STORAGE_KEY = 'feadback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));

// вывод данных объекта в localestorage................//
form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  console.log('before', formData);

  const jsonValue = JSON.stringify(formData);
  console.log('after', jsonValue);
  console.log('parse', JSON.parse(jsonValue));
});

localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));

const response = localStorage.getItem('formData');
console.log(JSON.parse(response));
//.....................................................//

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправить форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  console.log(message);
};

function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    console.log(saveMessage);
    textarea.value = saveMessage.name;

  }
};





