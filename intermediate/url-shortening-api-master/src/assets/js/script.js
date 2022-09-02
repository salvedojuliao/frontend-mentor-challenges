const btnShortenIt = document.querySelector('.btn-shorten');
const apiBase = "https://api.shrtco.de/v2/shorten?url=";

btnShortenIt.addEventListener("click", ()=>{
        const inputUrl = document.querySelector("#input-url").value;
        const sendUrl = "https://api.shrtco.de/v2/shorten?url=" + inputUrl;
        fetch(sendUrl)
            .then((response) => response.json())
            .then(data => {
                let shortedLink = data.result.full_short_link
                console.log(shortedLink)
            }) 
})

// function (shortedLink){
    
// }



// fetch(sendUrl).then((response) => {
//     console.log(response);
// })


// function fetchApiData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//         .then((response) => response.json())// Depois que ele fazer isso (transformar em json eu faço isso:)
//         .then(data => {
//             const list = document.querySelector('#fill_list');
            
//             data.map((item) => { // Pega cada item do array
//                 const li = document.createElement('li');

//                 li.setAttribute('id', item.id)
//                 li.innerHTML = item.title;
//                 list.appendChild(li)
//             })

//         })
        

// }











// Menu Hamburguer
const btnMobile = document.getElementById('btn-mobile');
const js_bar = document.querySelectorAll('.js_bar');

btnMobile.addEventListener("click", ()=>{
    const nav = document.getElementById('nav-mobile');
    nav.classList.toggle('active')
    js_bar.forEach(e => {
        e.classList.toggle('active')
    });
})

