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

// Слайдер
const swiper = new Swiper('.portfolio__slider', {
  slidesPerView: 5,
  spaceBetween: 20,
  grabCursor: true,
});

// Аккдион
const faqBlocks = document.querySelectorAll('.faq__block');

faqBlocks.forEach(block => {
  const header = block.querySelector('.faq__header');

  header.addEventListener('click', () => {

    faqBlocks.forEach(otherBlock => {
      if (otherBlock !== block) {
        otherBlock.classList.remove('open');
      }
    });

    block.classList.toggle('open');
  });
});
