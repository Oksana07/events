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

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);

function onOpenModal() {
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
  console.log(event.currentTarget);
  console.log(event.target);

  if (event.currentTarget === event.target) {
    console.log('Клікнули по бекдропу');

    onCloseModal();
  }
}
