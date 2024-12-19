// writing list
document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelectorAll(".writing-list li h3");
    const typingSpeed = 100; // Velocidade de digitação (ms)
    const deletingSpeed = 50; // Velocidade de exclusão (ms)
    const delayBetweenWords = 2000; // Tempo de pausa entre palavras (ms)
    const container = document.querySelector(".writing-list");
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = "";
    let charIndex = 0;

    function typeEffect() {
        const fullText = list[currentIndex].innerText;

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex--);
        } else {
            currentText = fullText.substring(0, charIndex++);
        }

        container.firstElementChild.innerHTML = `
            <h3>
                ${currentText}<span class="typing-cursor">|</span>
            </h3>`;

        if (!isDeleting && charIndex === fullText.length) {
            setTimeout(() => (isDeleting = true), delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % list.length;
        }

        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Initialize typing effect
    typeEffect();
});

// menu

const hamburgerButton = document.getElementById('hamburgerButton');
const menuOverlay = document.getElementById('menuOverlay');
const closeButton = document.getElementById('closeButton');

hamburgerButton.addEventListener('click', function() {
    menuOverlay.classList.add('show');
});

closeButton.addEventListener('click', function() {
    menuOverlay.classList.remove('show');
});

window.addEventListener('click', function(event) {
    if (event.target === menuOverlay) {
        menuOverlay.classList.remove('show');
    }
});


// particles 

particlesJS.load('particles-js', 'assets/js/particlesjs.json', function() {
    console.log('Particles.js carregado com sucesso!');
  });