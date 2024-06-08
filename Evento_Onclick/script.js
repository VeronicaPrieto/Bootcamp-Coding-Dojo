let likes = {
    entry1: 13,
    entry2: 37
};

document.querySelectorAll('.likes').forEach(button => {
    button.addEventListener('click', function () {
        let entry = this.getAttribute('data-entry');
        likes[entry]++;
        this.innerText = `${likes[entry]} likes`;

        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `<h3>This page says</h3><p>Ninja was liked!</p><button onclick="closePopup(this)">OK</button>`;
        document.body.appendChild(popup);
        popup.style.display = 'block';
    });
});

function hideAddDefinitionButton() {
    document.getElementById('addDefinitionButton').style.display = 'none';
}

function closePopup(element) {
    element.parentElement.style.display = 'none';
    element.parentElement.remove();
}

function toggleLogin() {
    let loginButton = document.getElementById('loginButton');
    if (loginButton.innerText === 'Login') {
        loginButton.innerText = 'Logout';
    } else {
        loginButton.innerText = 'Login';
    }
}




