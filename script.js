document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.estrela');
    const ratingValue = document.getElementById('valor-avaliacao');
    let selectedRating = 0;

    stars.forEach((stars) => {
        stars.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(stars.dataset.value);
        });

        stars.addEventListener('mouseout', () => {
            resetStars();
            highlightStars(selectedRating);
        });

        stars.addEventListener('click', () => {
            selectedRating = stars.dataset.value;
            ratingValue.textContent = selectedRating;
            resetStars();
            highlightStars(selectedRating);
        });
    });

    function highlightStars(count) {
        for (let i = 0; i < count; i++) {
            stars[i].classList.add('selecionada');
        }
    }

    function resetStars() {
        stars.forEach(stars => stars.classList.remove('selecionada'));
    }
});
