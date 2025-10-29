// Seleciona todas as estrelas
const stars = document.querySelectorAll('.star');

// Função para atualizar a avaliação
function updateRating(value) {
    // Atualiza as estrelas
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });

    // Atualiza o valor da avaliação
    document.getElementById('rating-value').textContent = value;
}

// Adiciona um event listener para cada estrela
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        updateRating(value);
    });

    // Opcional: muda a cor das estrelas enquanto o mouse passa por elas (hover)
    star.addEventListener('mouseover', () => {
        const value = parseInt(star.getAttribute('data-value'));
        updateRating(value);
    });

    // Restaura a cor original quando o mouse sai
    star.addEventListener('mouseout', () => {
        const value = parseInt(document.getElementById('rating-value').textContent);
        updateRating(value);
    });
});
