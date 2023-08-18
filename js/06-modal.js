/*
 * 1. Відкрити і закрити по кнопке
 * 2. Закрити по кліку в бекдроп: onBackDropClick
 
 * В CSS є клас show-modal, який необхідно добавити на body
 * при відкритті модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};
