// scripts.js
document.getElementById('show-more').addEventListener('click', function() {
    const moreContent = document.getElementById('more-content');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        this.textContent = 'Ver menos...'; // Altera o texto do botão
    } else {
        moreContent.classList.add('hidden');
        this.textContent = 'Ver mais...'; // Restaura o texto do botão
    }
});
