const menu = document.querySelector('.btn-menu');
const menubar = document.querySelector('.menubar');
const close = document.querySelector('.btn-close');

document.getElementById('vid').play();

menu.addEventListener('click', () => {
  menubar.classList.add('active');
});

close.addEventListener('click', () => {
  if (menubar.classList.contains('active')) {
    menubar.classList.remove('active');
  }
});
