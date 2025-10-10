const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const closeMenu = () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
};

if (burger && nav) {
  burger.addEventListener('click', () => {
      closeMenu();
  });

  nav.addEventListener('click', e => {
    if (e.target.matches('a')) {
      closeMenu();
    }
  });
}