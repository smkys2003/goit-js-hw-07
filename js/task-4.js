const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', getInfoFromLoginForm);

function getInfoFromLoginForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const dataForm = {
    email: email,
    password: password,
  };

  console.log(dataForm);
  form.reset();
}
