// Fade-in on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

document.addEventListener('DOMContentLoaded', animateOnScroll);
document.addEventListener('scroll', animateOnScroll);








   function updateButtons(track, prevBtn, nextBtn) {
    const scrollLeft = track.scrollLeft;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    prevBtn.style.display = scrollLeft > 0 ? 'block' : 'none';
    nextBtn.style.display = scrollLeft < maxScrollLeft - 5 ? 'block' : 'none';
  }

  function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const slideWidth = track.querySelector('img').clientWidth + 16;
    track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    setTimeout(() => updateButtons(track, prevBtn, nextBtn), 300);
  }

  function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const slideWidth = track.querySelector('img').clientWidth + 16;
    track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    setTimeout(() => updateButtons(track, prevBtn, nextBtn), 300);
  }

  // Initialize visibility on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');
      updateButtons(track, prevBtn, nextBtn);
    });
  });