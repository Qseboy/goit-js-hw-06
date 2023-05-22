function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в
// input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxesEl = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputCount = document.querySelector('input');

const getValueOfInput = event => {
  let inputValue = +event.currentTarget.value;

  if (inputValue) {
    createBtn.addEventListener('click', createBoxes(inputValue));
  }
};

const destroyBoxes = () => {
  console.log(boxesEl);
  boxesEl.innerHTML = '';
};

const createBoxes = amount => {
  return () => {
    let widthEl = 30;
    let heigthEl = 30;
    for (let i = 0; i < amount; i++) {
      const divEl = document.createElement('div');

      if (i == 0) {
        divEl.style.width = `${widthEl}px`;
        divEl.style.height = `${heigthEl}px`;
        divEl.style.backgroundColor = getRandomHexColor();
        boxesEl.append(divEl);
        continue;
      }

      widthEl += 10;
      heigthEl += 10;

      divEl.style.width = `${widthEl}px`;
      divEl.style.height = `${heigthEl}px`;
      divEl.style.backgroundColor = getRandomHexColor();

      boxesEl.append(divEl);
    }
  };
};

// get value of input
inputCount.addEventListener('change', getValueOfInput);

//
destroyBtn.addEventListener('click', destroyBoxes);
