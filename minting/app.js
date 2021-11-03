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
  if (num >= 4) {
    num = 0;
  }
  num++;
  document.getElementById('count').innerHTML = num;
});

minus.addEventListener('click', () => {
  if (num <= 0) {
    num = 1;
  }
  num--;
  document.getElementById('count').innerHTML = num;
});

paidbtn.addEventListener('click', () => {
  // if (quantityBox.classList.contains('disabled')) {
  //   quantityBox.classList.remove('disabled');
  //   freeQuantity.classList.remove('active');
  // }
  if (freebtn.classList.contains('active')) {
    freebtn.classList.remove('active');
    paidbtn.classList.add('active');
    quantityBox.classList.remove('disabled');
    freeQuantity.classList.remove('active');
  }
});

freebtn.addEventListener('click', () => {
  // if (freebtn.classList.contains('active')) {
  //   quantityBox.classList.add('disabled');
  //   freeQuantity.classList.add('active');
  // }
  if (paidbtn.classList.contains('active')) {
    paidbtn.classList.remove('active');
    freebtn.classList.add('active');
    quantityBox.classList.add('disabled');
    freeQuantity.classList.add('active');
  }
  num = 1;
  document.getElementById('count').innerHTML = num;
});
