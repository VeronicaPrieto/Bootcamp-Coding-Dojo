document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const likeCountElement = button.previousElementSibling;
        let likes = parseInt(likeCountElement.textContent.split(' ')[0]);
        likes++;
        likeCountElement.textContent = likes + ' like(s)';
    });
});

