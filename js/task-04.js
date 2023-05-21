const counterEl = document.querySelector('#counter');
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterEl.children[1].textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterEl.children[1].textContent = counterValue;
};

counterEl.firstElementChild.addEventListener('click', decrement);
counterEl.lastElementChild.addEventListener('click', increment);
