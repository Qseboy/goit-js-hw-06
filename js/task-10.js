// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в
// input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');

const items = [];
let valueQ = 0;

const haddleButtonsEl = event => {
  if (event.target.nodeName == 'INPUT') {
    const inputEl = event.target;
    inputEl.addEventListener('input', event => {
      valueQ = event.target.value;
    });
  }

  // if button is create
  if (event.target.hasAttribute('data-create')) {
    createBoxes(valueQ);
  }

  if (event.target.hasAttribute('data-destroy')) {
    while (boxesEl.childNodes.length > 0) {
      console.log(boxesEl.childNodes.length);
      boxesEl.firstChild.remove();
    }

    items.splice(0);
  }
};

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

controlsEl.addEventListener('click', haddleButtonsEl);
