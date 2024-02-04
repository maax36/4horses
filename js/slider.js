document.addEventListener('DOMContentLoaded', function () {
  //update dom mobile
  ////////////
  var slidersDiv = document.querySelector('.sliders');
  var isMobile = window.innerWidth <= 767;

  if (isMobile) {
      wrapBlocks(slidersDiv, ['b1', 'b2'], 'b', 'b1-b2');
      wrapBlocks(slidersDiv, ['b3'], 'b3', 'b');
      wrapBlocks(slidersDiv, ['b4', 'b5'], 'b', 'b4-b5');
      wrapBlocks(slidersDiv, ['b6'], 'b6', 'b');
      wrapBlocks(slidersDiv, ['b7'], 'b7', 'b');
  }

  function wrapBlocks(parentDiv, blockClasses, wrapperClass, addedClass) {
      var blocksToWrap = Array.from(parentDiv.children).filter(function (child) {
          return blockClasses.some(function (classPrefix) {
              return child.classList.contains(classPrefix);
          });
      });

      if (blocksToWrap.length >= 2) {
          var wrapperDiv = document.createElement('div');
          wrapperDiv.classList.add(wrapperClass, addedClass);

          blocksToWrap.forEach(function (block) {
              wrapperDiv.appendChild(block);
          });

          blocksToWrap.forEach(function (block) {
              if (block.classList.contains('b')) {
                  block.classList.remove('b');
              }
          });

          var b3Index = Array.from(parentDiv.children).findIndex(function (child) {
              return child.classList.contains('b3');
          });

          if (b3Index !== -1 && blockClasses.includes('b4')) {
              parentDiv.insertBefore(wrapperDiv, parentDiv.children[b3Index + 1]);
          } else {
              parentDiv.insertBefore(wrapperDiv, parentDiv.firstChild);
          }
      }
  }

  //slider: mob - controls/Indicator
  ////////////
  let currentSlide = 0;
  const slidesContainer = document.querySelector(".sliders");
  const slides = document.querySelectorAll(".sliders > div[class^='b']");
  const totalSlides = slides.length;
  const mprevBtn = document.getElementById("mprevBtn");
  const mnextBtn = document.getElementById("mnextBtn");
  const indicator = document.getElementById("indicator");

  mprevBtn.addEventListener("click", showPrevSlide);
  mnextBtn.addEventListener("click", showNextSlide);

  function showPrevSlide() {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updatemobSlider();
    }
  }

  function showNextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide += 1;
      updatemobSlider();
    }
  }

  function updatemobSlider() {
    const transformValue = `translateX(${-currentSlide * 100}%)`;
    slidesContainer.style.transform = transformValue;
    updateIndicator();
    updateButtonBackground();
  }

  function updateButtonBackground() {
      if (currentSlide === 0) {
        mprevBtn.style.backgroundColor = "#D6D6D6";
      } else {
        mprevBtn.style.backgroundColor = "";
      }

      if (currentSlide === totalSlides - 1) {
        mnextBtn.style.backgroundColor = "#D6D6D6";
      } else {
        mnextBtn.style.backgroundColor = "";
      }
    }

  function updateIndicator() {
    indicator.innerHTML = "";
    const updatedTotalSlides = Math.min(5, totalSlides);
    for (let i = 0; i < updatedTotalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.style.backgroundColor = i === currentSlide ? "#313131" : "#D9D9D9";
      indicator.appendChild(dot);
    }
  }

  updatemobSlider();




  //slider: desc/mob - controls/counter
  ////////////
  const slider = document.querySelector('.slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const counter = document.getElementById('counter');
  const m_prevBtn = document.getElementById('m_prevBtn');
  const m_nextBtn = document.getElementById('m_nextBtn');
  const m_counter = document.getElementById('m_counter');

  let num_page;
  let currentIndex = 0;
  const slidesPerPage = 3;
  const m_slidesPerPage = 1;

  let maxIndex = Math.floor(slider.children.length / slidesPerPage) - 1;
  let m_maxIndex = Math.floor(slider.children.length / m_slidesPerPage) - 1;

  function updateSlider() {
    const transformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${transformValue}%)`;

    if (currentIndex === 0) {
      counter.innerHTML = `<span style="color: #313131;">${currentIndex * slidesPerPage + slidesPerPage}</span> / 6`;
    } else if (currentIndex === maxIndex) {
      counter.innerHTML = `${currentIndex * slidesPerPage + slidesPerPage} / <span style="color: #313131;">6</span>`;
    } else {
      const currentPage = currentIndex + 1;
      counter.innerHTML = `<span style="color: #313131;">${currentPage}</span> / 6`;
    }
  }

  function m_updateSlider() {
    num_page = currentIndex * m_slidesPerPage + m_slidesPerPage;
    console.log(num_page);
    const transformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${transformValue}%)`;

    if (currentIndex === 0) {
      m_counter.innerHTML = `<span style="color: #313131;">${num_page}</span> / 6`;
    } else if (currentIndex === m_maxIndex) {
      m_counter.innerHTML = `${num_page} / <span style="color: #313131;">6</span>`;
    } else {
      const currentPage = currentIndex + 1;
      m_counter.innerHTML = `<span style="color: #313131;">${currentPage}</span> / 6`;
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.floor(slider.children.length / slidesPerPage) - 1;
    }
    updateSlider();
  }

  function showNext() {
    const maxIndex = Math.floor(slider.children.length / slidesPerPage) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  function m_showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.floor(slider.children.length / m_slidesPerPage) - 1;
    }
    m_updateSlider();
  }

  function m_showNext() {
    const maxIndex = Math.floor(slider.children.length / m_slidesPerPage) - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    m_updateSlider();
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  m_prevBtn.addEventListener('click', m_showPrev);
  m_nextBtn.addEventListener('click', m_showNext);

  function autoSlide() {
    showNext();
  }

  function m_autoSlide() {
    m_showNext();
  }

  let intervalId;

  if (window.innerWidth < 768) {
    intervalId = setInterval(m_autoSlide, 4000);
    m_updateSlider();
  } else {
    intervalId = setInterval(autoSlide, 4000);
    updateSlider();
  }

});