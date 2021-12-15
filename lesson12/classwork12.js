// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        value.forEach(item => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');

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

            let commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments');

            let button = document.createElement('button');
            button.innerText = 'show comments';
            button.onclick = function () {
                if (commentsDiv.childElementCount === 0) {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                        .then(value => value.json())
                        .then(value => {
                            value.forEach(item => {

                                let commentDiv = document.createElement('div');
                                commentDiv.classList.add('comment');

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
                }

                commentsDiv.classList.toggle('visible')
            }

            postDiv.append(postIdDiv, postUserIdDiv, postTitleDiv, postBodyDiv);
            postsDiv.append(postDiv, button, commentsDiv);
        })
    })