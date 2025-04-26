const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');


const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-[]{}|;:,.<>?/";

generateBtn.addEventListener('click', () => {
    const length = lengthInput.value;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordInput.value = password;
});

copyBtn.addEventListener('click', () => {
    if (passwordInput.value) {
        passwordInput.select();
        document.execCommand('copy');
        alert('Senha copiada!');
    } else {
        alert('Nenhuma senha para copiar!');
    }
});
