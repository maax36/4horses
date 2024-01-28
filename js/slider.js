document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const counter = document.getElementById('counter');

  const m_prevBtn = document.getElementById('m_prevBtn');
  const m_nextBtn = document.getElementById('m_nextBtn');
  const m_counter = document.getElementById('m_counter');

  let currentIndex = 0;
  const slidesPerPage = 3;
  const m_slidesPerPage = 1;

  function updateSlider() {
    const transformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${transformValue}%)`;
    counter.textContent = `${currentIndex * 3 + 3} / 6`;
  }

  function m_updateSlider() {
    const transformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${transformValue}%)`;
    m_counter.textContent = `${currentIndex * 1 + 1} / 6`;
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  function showNext() {
    const maxIndex = Math.floor(slider.children.length / slidesPerPage) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  function m_showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      m_updateSlider();
    }
  }

  function m_showNext() {
    const maxIndex = Math.floor(slider.children.length / m_slidesPerPage) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
      m_updateSlider();
    }
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  updateSlider();

  m_prevBtn.addEventListener('click', m_showPrev);
  m_nextBtn.addEventListener('click', m_showNext);
  m_updateSlider();
});