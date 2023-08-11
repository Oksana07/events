/*
 * - Події submit
 * - Дії браузера по замовчуванню
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   console.dir(event.currentTarget.elements.subscription.value);

  const formData = new FormData(event.currentTarget);

  //   console.log(event.currentTarget); ссилка на форму

  console.log(formData);

  formData.forEach((value, name) => {
    console.log('value', value);
    console.log('name', name);
  });
}
