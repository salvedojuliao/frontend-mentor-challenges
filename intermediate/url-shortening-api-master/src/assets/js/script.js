const btnShortenIt = document.querySelector('.btn-shorten');
const apiBase = "https://api.shrtco.de/v2/shorten?url=";

btnShortenIt.addEventListener("click", ()=>{
        const inputUrl = document.querySelector("#input-url").value;
        if (inputUrl == ""){
            alert("Adicione um link")
            return;
        }else{
            const sendUrl = "https://api.shrtco.de/v2/shorten?url=" + inputUrl;
            fetch(sendUrl)
                .then((response) => response.json())
                .then(data => {

                    let shortedLink = data.result.full_short_link;
                    let showLink = document.createElement("p");
                    showLink.classList.add("show-link");
                    showLink.innerText = shortedLink;
                    
                    let linkInserted = document.createElement("p");
                    linkInserted.classList.add("link-inserted");
                    linkInserted.innerText = inputUrl;

                    // Creating divs to link
                    let jsSectionDivs = document.querySelector(".js-section-divs");
                    let shorteLlinksContainer = document.createElement("div");
                    shorteLlinksContainer.classList.add("shorten-links-container");
                    jsSectionDivs.appendChild(shorteLlinksContainer)
                    
                    let bgLinks = document.createElement("div");
                    bgLinks.classList.add("bg-links");
                    shorteLlinksContainer.appendChild(bgLinks);
            
                    let divPLinks = document.createElement("div");
                    divPLinks.classList.add("div-p-links");
                    bgLinks.appendChild(divPLinks);
                    divPLinks.appendChild(linkInserted);

                    let divLinksCopy = document.createElement("div");
                    divLinksCopy.classList.add("div-links-copy");
                    bgLinks.appendChild(divLinksCopy);
                    divLinksCopy.appendChild(showLink);

                    let btnCopy = document.createElement("button");
                    btnCopy.classList.add("btn-copy");
                    btnCopy.innerText = "Copy";
                    divLinksCopy.appendChild(btnCopy);
            }) 
        }
     
        //catch 
})



// const div = document.createElement("div");
// const title = document.createElement("h2");
// const body = document.createElement("p");
// const link = document.createElement("a");

// title.innerText = post.title;
// body.innerText = post.body;
// link.innerText = "Ler";
// link.setAttribute("href", `/post.html?id=${post.id}`);


// div.appendChild(title);
// div.appendChild(body);
// div.appendChild(link);
// postsContainer.appendChild(div);

// btnShortenIt.addEventListener("click", ()=>{
    // const inputUrl = document.querySelector("#input-url").value;
    // const sendUrl = "https://api.shrtco.de/v2/shorten?url=" + inputUrl;
    // fetch(sendUrl)
    //     .then((response) => response.json())
    //     .then(data => {
    //         let shortedLink = data.result.full_short_link
    //         let showLink = document.querySelector(".show-link");
    //         console.log(showLink);
    //         showLink.innerText = shortedLink;
    //         let linkInserted = document.querySelector(".link-inserted");
    //         linkInserted.innerText = inputUrl;
    //         const sectionLink = document.querySelector(".section-shorten-link");
    //         console.log(sectionLink)
    //     })  
    //catch 
// })





// function showShortentedLink(){
//     const showLink = document.querySelector(".showLink");
//     console.log(showLink)
//     let p = document.createElement("p");
//     p.innerHTML = `<p>${showLink}</p>`;
//     showLink.appendChild(p);
//     console.log(showLink)  
// }

// let p = document.createElement("p");
//         p.innerText = shortedLink;
//         showLink.appendChild(p);
//         console.log(showLink)










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