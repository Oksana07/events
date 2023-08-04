/*
 * Патерн «Обєкт силок»
 *
 * Події
 * - focus и blur
 * - input и change
 * - Чекбокси і властивість checked
 */

const input = document.querySelector('.js-input');
const license = document.querySelector('.js-license');
const nameLabel = document.querySelector('.js-button > span');
const btn = document.querySelector('.js-button');

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус - подія blur');
}

function onInputChange() {}

function onLicenseChange() {}
