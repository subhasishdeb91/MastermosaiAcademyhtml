document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let currentIndex = 0;
  let autoScrollInterval;

  const updateSlidePosition = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  };

  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
    startAutoScroll();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
    startAutoScroll();
  });

  const startAutoScroll = () => {
    autoScrollInterval = setInterval(nextSlide, 2000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  // Touch/swipe support
  let startX = 0;
  let isDragging = false;

  slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoScroll();
  });

  slides.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    slides.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diffX}px))`;
  });

  slides.addEventListener('touchend', (e) => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    if (diffX > 50) {
      prevSlide();
    } else if (diffX < -50) {
      nextSlide();
    } else {
      updateSlidePosition();
    }
    startAutoScroll();
  });

  startAutoScroll();
});
