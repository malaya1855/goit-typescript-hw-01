const button = document.querySelector('button');
let message = document.querySelector('p');
const input = document.querySelector('input');
button.addEventListener('click', () => {
    message.innerText = input.value;
    input.value = '';
});
//# sourceMappingURL=index.js.map