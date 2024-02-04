document.addEventListener("DOMContentLoaded", function() {
    
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


    //click button
    ////////////
    window.scrollToSection = function(sectionClass) {
        var section = document.getElementsByClassName(sectionClass)[0];
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    window.scrollToSectionByButton = function(buttonClass) {
        var sectionClass;
        if (buttonClass === 'b1') {
            sectionClass = 's2'; // Поддержать шахматную мысль
        } else if (buttonClass === 'b2') {
            sectionClass = 's3'; // Подробнее о турнире
        }

        scrollToSection(sectionClass);
    }
});