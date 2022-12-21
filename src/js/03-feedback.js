import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('feedback-form, textarea');

const STORAGE_KEY = 'feadback-form-state';
const formData = {};

form.addEventListener('submit', onFormSubmit);

// вывод данных объекта в localestorage................//
form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value.trim();
  console.log('before', formData);

  const jsonValue = JSON.stringify(formData);
  console.log('after', jsonValue);
  localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
  console.log('parse', JSON.parse(jsonValue));
});
//.....................................................//

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);

  console.log('Отправить форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};


function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  try{
  if (saveMessage) {
    console.log(formData = JSON.parse(saveMessage));

    Object.fromEntries(formData).forEach(([key, value]) => {
      form.elements[key] = value;
    });
    }
  } catch {

  }
};





