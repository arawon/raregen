import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

AOS.init({
  once: true,
  duration: 850,
  easing: 'ease-out-cubic',
  offset: 40,
  disable: () => reduce,
});

/* 라이브러리 초기화 뒤 이미지가 로드되면 등장 위치를 다시 계산한다 */
window.addEventListener('load', () => AOS.refresh());

document.querySelectorAll<HTMLElement>('[data-swiper="hero"]').forEach((el) => {
  new Swiper(el, {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 900,
    loop: true,
    autoplay: reduce ? false : { delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: el.querySelector<HTMLElement>('.swiper-pagination'), clickable: true },
  });
});

document.querySelectorAll<HTMLElement>('[data-swiper="logos"]').forEach((el) => {
  new Swiper(el, {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true,
    speed: 4200,
    allowTouchMove: false,
    autoplay: reduce ? false : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
  });
});

document.querySelectorAll<HTMLElement>('[data-swiper="gallery"]').forEach((el) => {
  const root = el.closest<HTMLElement>('[data-gallery]') ?? document.body;
  new Swiper(el, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 650,
    grabCursor: true,
    navigation: {
      prevEl: root.querySelector<HTMLElement>('.js-prev'),
      nextEl: root.querySelector<HTMLElement>('.js-next'),
    },
  });
});

/* 숫자 카운트업 */
const countUp = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduce || !target) return;
  let start: number | null = null;
  const step = (now: number) => {
    start ??= now;
    const progress = Math.min((now - start) / 1100, 1);
    el.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    counter.unobserve(entry.target);
    countUp(entry.target as HTMLElement);
  });
});
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));
