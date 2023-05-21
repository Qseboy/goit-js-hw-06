// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const spanEl = inputEl.nextElementSibling.firstElementChild;

const changeText = event => {
  if (event.currentTarget.value) {
    spanEl.textContent = event.currentTarget.value;
    return;
  }
  spanEl.textContent = 'Anonymous';
};

inputEl.addEventListener('input', changeText);
