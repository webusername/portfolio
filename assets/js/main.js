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
  slidesPerView: 1.2,
  spaceBetween: 10,
    breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// Аккдион
const faqBlocks = document.querySelectorAll('.faq__block');

faqBlocks.forEach(block => {
  const header = block.querySelector('.faq__header');
  const answer = block.querySelector('.faq__answer');

  // Если блок открыт по умолчанию (есть класc open)
  if (block.classList.contains('open')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
  } else {
    answer.style.maxHeight = '0px';
  }

  // Клик по вопросу
  header.addEventListener('click', () => {
    // Закрываем все остальные
    faqBlocks.forEach(other => {
      if (other !== block) {
        other.classList.remove('open');
        const otherAnswer = other.querySelector('.faq__answer');
        otherAnswer.style.maxHeight = '0px';
      }
    });

    // Открываем/закрываем текущий
    block.classList.toggle('open');
    if (block.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0px';
    }
  });
});

