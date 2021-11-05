const menu = document.querySelector('.btn-menu');
const menubar = document.querySelector('.menubar');
const close = document.querySelector('.btn-close');

// Mint a coffee
const freebtn = document.querySelector('.button-free');
const paidbtn = document.querySelector('.button-paid');

// Counter Mint
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const quantityBox = document.querySelector('.quantity-box');
const freeQuantity = document.querySelector('.free-quantity');

// min and max number
const min = document.querySelector('.min');
const max = document.querySelector('.max');

var num = document.getElementById('count').innerHTML;

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
  if (num === 4) {
    if (max.classList.contains('disabled')) {
      max.classList.remove('disabled');
      quantityBox.classList.add('disabled');
    }
  }
  if (num >= 4) {
    num = 4;
  }
  num++;
  document.getElementById('count').innerText = num;
});

minus.addEventListener('click', () => {
  if (num === 1) {
    if (min.classList.contains('disabled')) {
      min.classList.remove('disabled');
      quantityBox.classList.add('disabled');
    }
    num = 1;
  }
  num--;
  document.getElementById('count').innerHTML = num;
});

paidbtn.addEventListener('click', () => {
  if (freebtn.classList.contains('active')) {
    freebtn.classList.remove('active');
    paidbtn.classList.add('active');
    quantityBox.classList.remove('disabled');
    freeQuantity.classList.remove('active');
  }
});

freebtn.addEventListener('click', () => {
  if (paidbtn.classList.contains('active')) {
    paidbtn.classList.remove('active');
    freebtn.classList.add('active');
    quantityBox.classList.add('disabled');
    freeQuantity.classList.add('active');
    max.classList.add('disabled');
    min.classList.add('disabled');
  }
  num = 1;
  document.getElementById('count').innerHTML = num;
});
