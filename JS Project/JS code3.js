// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let boxDiv3 = document.getElementById('box3');

let params = new URLSearchParams(document.location.search);
let postId = params.get("id");
console.log(postId);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(item => item.json())
    .then(item => {

        console.log(item);
        let postDiv = document.createElement('div');
        postDiv.classList.add('item4');

        let postIdDiv = document.createElement('div');
        postIdDiv.classList.add('block', 'id');
        postIdDiv.innerText = `id - ${item.id}`;

        let postUserIdDiv = document.createElement('div');
        postUserIdDiv.classList.add('block', 'id');
        postUserIdDiv.innerText = `user ID - ${item.userId}`;

        let postTitleDiv = document.createElement('h2');
        postTitleDiv.classList.add('block');
        postTitleDiv.innerText = item.title;

        let postBodyDiv = document.createElement('div');
        postBodyDiv.classList.add('block');
        postBodyDiv.innerText = item.body;

        let buttonCom = document.createElement('button');
        buttonCom.innerText = 'show comments';

        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments2');


        postDiv.append(postIdDiv, postUserIdDiv, postTitleDiv, postBodyDiv);


        fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
            .then(value => value.json())
            .then(value => {
                value.forEach(item => {
                    console.log(value);

                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment2');

                    let commentPostIdDiv = document.createElement('div');
                    commentPostIdDiv.classList.add('block', 'id');
                    commentPostIdDiv.innerText = `post id - ` + item.postId;

                    let commentIdDiv = document.createElement('div');
                    commentIdDiv.classList.add('block', 'id');
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

        boxDiv3.append(postDiv, commentsDiv);

    })