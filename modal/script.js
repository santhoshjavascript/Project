'use strict';
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');

const removeElement = () => {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closingElement = () => {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

btns.forEach(function (everyBtn) {
  everyBtn.addEventListener('click', removeElement);
});

closeBtn.addEventListener('click', closingElement);

document.addEventListener('keydown', function (hello) {
  if (hello.key === 'Escape') closingElement();
});
