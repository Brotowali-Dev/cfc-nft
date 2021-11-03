const menu = document.querySelector('.btn-menu');
const menubar = document.querySelector('.menubar');
const close = document.querySelector('.btn-close');

// Counter Mint
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

// Video autoplay
document.getElementById('vid').play();

// Mobile nav toggle
menu.addEventListener('click', () => {
  menubar.classList.add('active');
});

close.addEventListener('click', () => {
  if (menubar.classList.contains('active')) {
    menubar.classList.remove('active');
  }
});

plus.addEventListener('click', () => {
  var num = document.getElementById('count').innerHTML;
  num++;
  document.getElementById('count').innerHTML = num;
});

minus.addEventListener('click', () => {
  var num = document.getElementById('count').innerHTML;
  num--;
  document.getElementById('count').innerHTML = num;
});
