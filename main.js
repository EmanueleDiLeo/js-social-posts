const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.querySelector("#container");
container.innerHTML = "";
let count = [];
let date = [];
let imgNull = [];

posts.forEach((element) => {

    const {id,content,media,author,likes,created} = element;

    count.push(likes);
    date.push(created);

    if(author.image === null){
        imgNull.push(id-1);
    }

    container.innerHTML += 
    `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${author.image} alt="${author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});

console.log(count);
console.log(imgNull);

const btns = document.getElementsByClassName("like-button");
let like = document.getElementsByClassName("js-likes-counter");
let dates = document.getElementsByClassName("post-meta__time");
let imgsP = document.getElementsByClassName("post-meta__icon");

console.log(btns[0].classList.contains("like-button--liked"));
console.log(btns[1].classList.contains("like-button--liked"));
console.log(btns[2].classList.contains("like-button--liked"));

console.log(like[0]);
console.log(like[1]);
console.log(like[2]);

let listId = [];

posts.forEach((element) => {
    const {id} = element;
    btns[id-1].addEventListener("click",function(){
        if(btns[id-1].classList.contains("like-button--liked")){
            console.log(count[id-1]);
            console.log(like[id-1]);
            count[id-1]--;
            console.log(count[id-1]);
            console.log(like[id-1]);
            btns[id-1].classList.remove("like-button--liked");
            for(let i = 0; i < listId.length; i++){
                if(listId[i] === id){
                    listId.splice(i, 1);
                }
            }
            
        }
        else{
            console.log(count[id-1]);
            console.log(like[id-1]);
            count[id-1]++;
            console.log(count[id-1]);
            console.log(like[id-1]);
            btns[id-1].classList.add("like-button--liked");
            listId.push(id);
            
        }
        console.log(listId);
        console.log(btns[id-1].classList.contains("like-button--liked"));
        like[id-1].innerHTML = count[id-1];
    });
});

dateIta();

function dateIta(){
    for(let i = 0; i < date.length; i++){
        let newDate = date[i].split("-").reverse().join("-");
        console.log(date[i]=newDate);
        dates[i].innerHTML = date[i];
    }
}

imgProfile();

function imgProfile(){
    let count = 0;
    for(let post of posts){
        if(imgNull.includes(count)){
            let nameArray = post.author.name.split(" ");
            let nameChar = nameArray[0].charAt(0);
            let surnameChar = nameArray[1].charAt(0);
            
            imgsP[count].innerHTML = 
            `   
            <div class="profile-pic">
                <h2>${nameChar + surnameChar}</h2>
            </div>
            `;
            console.log(nameChar + surnameChar);
        }
        count++;
    }
}