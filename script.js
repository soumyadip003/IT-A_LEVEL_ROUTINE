document.addEventListener('DOMContentLoaded', () => {
    const dayCards = document.querySelectorAll('.day-card');

    dayCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fadeIn');
        }, index * 200); // Stagger the animations
    });
});

