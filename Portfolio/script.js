
const links = document.querySelectorAll('nav li a');
const box = document.querySelector('#box')

links.forEach((push) => {
    push.addEventListener('click', () => {
        nav.classList.remove('active-menu');
        box.classList.toggle('action-box');
    })
})

box.addEventListener('click', () => {
    nav.classList.toggle('active-menu')
    box.classList.toggle('action-box');
})


const sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let id = sec.getAttribute('id');
        links.forEach(link => {
            link.classList.remove('view');
            document.querySelector(id).classList.add('view');
        });
    })
};