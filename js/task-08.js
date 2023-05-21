const formEl = document.querySelector('.login-form');
const data = {};

const validateForm = event => {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('Все поля должны быть заполнены');
    return;
  }

  data.email = email.value;
  data.password = password.value;
  console.log(data);
  event.currentTarget.reset(); //reset
};

formEl.addEventListener('submit', validateForm);
