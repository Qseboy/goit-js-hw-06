const inputEl = document.querySelector('#font-size-control');

const spanEl = inputEl.nextElementSibling.nextElementSibling;

const changeInput = event => {
  console.log(event.currentTarget.value);
  spanEl.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', changeInput);
