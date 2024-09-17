document.addEventListener('DOMContentLoaded', function() {
    const flipButton = document.getElementById('flipButton');
    const flipCardInner = document.querySelector('.flip-card-inner');

    flipButton.addEventListener('click', function() {
        flipCardInner.classList.toggle('flipped');
    });
});