const header = document.querySelector('.head');
const menuButtonImg = document.querySelector('.header-menu-button-img');
const menuButton = document.querySelector('.header-menu-button');
const navButtons = document.querySelectorAll('.nav-ul a');

const openedMenuButtonImgSrc = './media/header-menu-button-opened.svg';
const closedMenuButtonImgSrc = './media/header-menu-button.svg';
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
let isOpen = false;

const toggleMenu = () => {
  isOpen = !isOpen;
  header.classList.toggle('header-menu-opened');
  menuButtonImg.src = isOpen ? openedMenuButtonImgSrc : closedMenuButtonImgSrc;
  document.body.classList.toggle('overflow-hidden');
  document.body.style.marginRight = `${isOpen ? scrollbarWidth : 0}px`;
  header.style.marginRight = `${isOpen ? scrollbarWidth : 0}px`;
};

menuButton.addEventListener('click', toggleMenu);
navButtons.forEach((btn) => btn.addEventListener('click', toggleMenu));