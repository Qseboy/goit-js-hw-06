function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span.color');
const buttonEl = document.querySelector('button.change-color');

const changeColor = event => {
  let currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = `${currentColor}`;
};

buttonEl.addEventListener('click', changeColor);
