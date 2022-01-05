const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let divEl = document.querySelector('.container');
  divEl.classList.toggle('active');
});
