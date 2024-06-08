const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count');

let likes = parseInt(likeCount.textContent.split(' ')[0]); // Get initial likes

likeButton.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes + ' like(s)';
});