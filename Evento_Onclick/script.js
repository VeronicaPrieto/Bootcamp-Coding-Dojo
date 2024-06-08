const loginBtn = document.getElementById('login-btn');
const addDefinitionBtn = document.querySelector('.add-definition');
const likesBtn = document.querySelector('.likes');

loginBtn.onclick = function () {
    if (loginBtn.textContent === 'Login') {
        loginBtn.textContent = 'Logout';
    } else {
        loginBtn.textContent = 'Login';
    }
};

addDefinitionBtn.onclick = function () {
    addDefinitionBtn.style.display = 'none';
};

likesBtn.onclick = function () {
    alert('Ninja was liked!');
};