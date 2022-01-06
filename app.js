const btn = document.querySelector('.btn');
let divEl = document.querySelector('.container');
let inputEl = document.querySelector('.search');
btn.addEventListener('click', () => {
  divEl.classList.toggle('active');
  inputEl.focus();
});
