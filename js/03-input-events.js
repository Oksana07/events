/*
 * Патерн «Обєкт силок»
 *
 * Події
 * - focus і blur
 * - input і change
 * - Чекбокси і властивість checked
 */

// const input = document.querySelector('.js-input');
// const license = document.querySelector('.js-license');
// const nameLabel = document.querySelector('.js-button > span');
// const btn = document.querySelector('.js-button');

const rest = {
  input: document.querySelector('.js-input'),
  license: document.querySelector('.js-license'),
  nameLabel: document.querySelector('.js-button > span'),
  btn: document.querySelector('.js-button'),
};

// rest.input.addEventListener('focus', onInputFocus);
// rest.input.addEventListener('blur', onInputBlur);
// rest.input.addEventListener('input', onInputChange);

rest.input.addEventListener('input', onInputChange);
rest.license.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус - подія blur');
}

function onInputChange(event) {
  console.log(event.currentTarget.value);

  rest.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  // console.log(event.currentTarget.checked);

  console.log(rest.btn.disabled);

  rest.btn.disabled = !event.currentTarget.checked;
}
