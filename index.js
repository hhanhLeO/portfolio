const name = 'Hanh Le';
const typingElement = document.querySelector('.typing-container');
typingElement.textContent = '';
let i = 0;

function type() {
    if (i < name.length) {
        typingElement.textContent += name[i++];
        setTimeout(type, 200);
    }
}

type();
