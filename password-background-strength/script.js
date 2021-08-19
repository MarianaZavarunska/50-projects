const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const count = input.length
    background.style.filter = `blur(${ 20 - count * 2}px)`
    
})