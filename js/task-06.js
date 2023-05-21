const inputEl = document.querySelector('#validation-input');

const checkLength = event => {
  let inputLenght = event.currentTarget.value.length;

  // if value = 0
  if (!event.currentTarget.value) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
    return;
  }

  //check input lenght, two variable with dataset and getAttribute('data-length')
  if (inputLenght > inputEl.dataset.length) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else if (inputLenght < inputEl.getAttribute('data-length')) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
};

inputEl.addEventListener('blur', checkLength);
