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
        "created": "2021-06-25",
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


function CreatedPost() {

    posts.forEach(element => {


        container.innerHTML += `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                <div class="post-meta__icon">
                <img class="profile-pic" src=${element.author.image} alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${calcMonth(new Date(element.created))} mesi fa</div>
                        </div>                    
                        </div>
                        </div>
                        <div class="post__text">${element.content}</div>
                        <div class="post__image">
                        <img src="${element.media}" alt="">
                        </div>
                        <div class="post__footer">
                        <div class="likes js-likes">
                        <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#${element.id}" data-postid="${element.id}" id="btn">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                        </a>
                        </div>
                        <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                        </div>
                        </div> 
                        </div>            
                        </div>`
    });
}

function calcMonth(date) {
    let today = new Date();

    let yearPost = date.getFullYear();
    let monthPost = date.getMonth();

    let yearToday = today.getFullYear();
    let monthToday = today.getMonth();

    let diffYears = yearToday - yearPost;
    let diffMonth = diffYears * 12 + monthToday - monthPost;

    return diffMonth

}

let container = document.getElementById('container');
CreatedPost()


let likeButton = document.querySelectorAll('.like-button.js-like-button');
let arrayId = [];

console.log(likeButton)

likeButton.forEach(element => {
    element.addEventListener("click", function () {
        let buttonId = element.getAttribute('data-postid');
        let counter = document.getElementById(`like-counter-${buttonId}`)

        if (!element.classList.contains('like-button--liked')) {
            element.classList.add('like-button--liked');
            counter.innerHTML++
            console.log(counter)

            if (!arrayId.includes(`${buttonId}`)) {
                arrayId.push(`${buttonId}`)
                console.log(arrayId)

            }
        }

        else {
            element.classList.remove('like-button--liked');
            counter.innerHTML--
        }



    })
});




