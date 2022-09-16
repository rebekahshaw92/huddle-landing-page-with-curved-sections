const form = document.getElementById('form');
const email = document.getElementById('email');

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value !== regex){ 
        emailError.innerText = 'Check your email please';
        email.classList.add('error');
    }
});
