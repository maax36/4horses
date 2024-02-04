document.addEventListener("DOMContentLoaded", function() {
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