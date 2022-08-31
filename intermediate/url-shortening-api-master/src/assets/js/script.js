const btnMobile = document.getElementById('btn-mobile');
const js_bar = document.querySelectorAll('.js_bar');

btnMobile.addEventListener("click", ()=>{
    const nav = document.getElementById('nav-mobile');
    nav.classList.toggle('active')
    js_bar.forEach(e => {
        e.classList.toggle('active')
    });
})

