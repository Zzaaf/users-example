const form = document.querySelector('#form');
const list = document.querySelector('#list');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email, password } = event.target;

    const response = await fetch('/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.status === 400) {
      const { message } = await response.json();

      console.log(message);
    } else {
      const { html } = await response.json();

      list.insertAdjacentHTML('beforeend', html);

      event.target.reset();
    }
  });
}
