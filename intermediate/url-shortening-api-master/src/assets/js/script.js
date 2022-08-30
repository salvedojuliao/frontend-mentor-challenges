const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener("click", ()=>{
    const nav = document.getElementById('nav-mobile');
    nav.classList.toggle('active')
})