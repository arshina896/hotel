setTimeout(function () {

  AOS.init({
    duration: 800,
    easing: 'ease',
    once: false
  });

}, 800);
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext)
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext)
};
// navbar
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.js-sticky-nav');
  const scrollThreshold = 50;
  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
// img-1
document.addEventListener('scroll', () => {
  const image = document.getElementById('img-view');
  const triggerPosition = 300;
  const scrollTop = window.scrollY;
  if (scrollTop > triggerPosition) {
    image.style.width = '50%';
  }
});
// img-2
document.addEventListener('scroll', () => {
  const image2 = document.getElementById('img2-view');
  const triggerPosition = 300;
  const scrollTop = window.scrollY;
  if (scrollTop > triggerPosition) {
    image2.style.width = '60%';
  }
});
// img-3
document.addEventListener('scroll', () => {
  const image3 = document.getElementById('room2a');
  const triggerPosition = 850;
  const scrollTop = window.scrollY;
  if (scrollTop > triggerPosition) {
    image3.style.width = '95%';
  }
});
// img-4
document.addEventListener('scroll', () => {
  const image4 = document.getElementById('room2b');
  const triggerPosition = 850;
  const scrollTop = window.scrollY;
  if (scrollTop > triggerPosition) {
    image4.style.width = '60%';
  }
});