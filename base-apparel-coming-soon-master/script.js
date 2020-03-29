const form = document.querySelector('.form');
const input = form.querySelector('input');

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  if(validateEmail(input.value)){
    form.classList.remove('error');
    document.body.innerHTML = `<div style="display:flex;justify-content: center;"><h1>Thank You!</h1></div>`
  } else {
    form.classList.add('error');
  }
})
