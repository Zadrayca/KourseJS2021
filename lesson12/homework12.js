//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        value.forEach(item => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

            let postIdDiv = document.createElement('div');
            postIdDiv.classList.add('block');
            postIdDiv.innerText = `id - ${item.id}`;

            let postUserIdDiv = document.createElement('div');
            postUserIdDiv.classList.add('block');
            postUserIdDiv.innerText = `user ID - ${item.userId}`;

            let postTitleDiv = document.createElement('h2');
            postTitleDiv.classList.add('block');
            postTitleDiv.innerText = item.title;

            let postBodyDiv = document.createElement('div');
            postBodyDiv.classList.add('block');
            postBodyDiv.innerText = item.body;


            postDiv.append(postIdDiv, postUserIdDiv, postTitleDiv, postBodyDiv);
            postsDiv.appendChild(postDiv);
        })
    })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let commentsDiv = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        value.forEach(item => {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            let commentPostIdDiv = document.createElement('div');
            commentPostIdDiv.classList.add('block');
            commentPostIdDiv.innerText = `post id - ` + item.postId;

            let commentIdDiv = document.createElement('div');
            commentIdDiv.classList.add('block');
            commentIdDiv.innerText = `ID - ` + item.id;

            let commentNameDiv = document.createElement('div');
            commentNameDiv.classList.add('block');
            commentNameDiv.innerText = item.name;

            let commentEmailDiv = document.createElement('div');
            commentEmailDiv.classList.add('block');
            commentEmailDiv.innerText = item.email;

            let commentBodylDiv = document.createElement('div');
            commentBodylDiv.classList.add('block');
            commentBodylDiv.innerText = item.body;


            commentDiv.append(commentPostIdDiv, commentIdDiv, commentNameDiv, commentEmailDiv, commentBodylDiv);
            commentsDiv.appendChild(commentDiv);
        })
    })