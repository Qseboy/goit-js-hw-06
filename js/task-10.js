// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в
// input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');

const items = [];

// create div EL
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    items.push(divEl);
  }
  boxesEl.append(...items);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreateEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

buttonDestroyEl.addEventListener('click', () => {
  while (boxesEl.childNodes.length > 0) {
    boxesEl.firstChild.remove();
  }
  items.splice(0);
});
