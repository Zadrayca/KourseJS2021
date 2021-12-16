// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let boxDiv = document.getElementsByClassName('box')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        value.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item')
            const idDiv = document.createElement('div');
            idDiv.innerText = 'id: ' + item.id;
            const nameDiv = document.createElement('div');
            nameDiv.innerText = 'name: ' + item.name;
            const usernameDiv = document.createElement('div');
            usernameDiv.innerText = 'username: ' + item.username;
            const emailDiv = document.createElement('div');
            emailDiv.innerText = 'email: ' + item.email;

            const addressDiv = document.createElement('div');
            const streetDiv = document.createElement('div');
            streetDiv.innerText = 'street: ' + item.address.street;
            const suiteDiv = document.createElement('div');
            suiteDiv.innerText = 'suite: ' + item.address.suite;
            const cityDiv = document.createElement('div');
            cityDiv.innerText = 'city: ' + item.address.city;
            const zipcodeDiv = document.createElement('div');
            zipcodeDiv.innerText = 'zipcode: ' + item.address.zipcode;

            const geoDiv = document.createElement('div');
            const latDiv = document.createElement('div');
            latDiv.innerText = 'lat: ' + item.address.geo.lat;
            const lngDiv = document.createElement('div');
            lngDiv.innerText = 'lng: ' + item.address.geo.lng;

            geoDiv.append(latDiv, lngDiv);

            addressDiv.append(streetDiv, suiteDiv, cityDiv, zipcodeDiv, geoDiv);

            const phoneDiv = document.createElement('div');
            phoneDiv.innerText = 'phone: ' + item.phone;
            const websiteDiv = document.createElement('div');
            websiteDiv.innerText = 'website: ' + item.website;
            const companyDiv = document.createElement('div');

            const comNameDiv = document.createElement('div');
            comNameDiv.innerText = 'name: ' + item.company.name;
            const catchPhraseDiv = document.createElement('div');
            catchPhraseDiv.innerText = 'catchPhrase: ' + item.company.catchPhrase;
            const bsDiv = document.createElement('div');
            bsDiv.innerText = 'bs: ' + item.company.bs;

            companyDiv.append(comNameDiv, catchPhraseDiv, bsDiv);

            itemDiv.append(idDiv, nameDiv, usernameDiv, emailDiv, addressDiv, phoneDiv, websiteDiv, companyDiv)

            let buttonPost = document.createElement('button');
            buttonPost.innerText = 'show posts';

            let postsDiv = document.createElement('div');
            postsDiv.classList.add('comments');

            buttonPost.onclick = function () {
                if (postsDiv.childElementCount === 0) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
                        .then(value => value.json())
                        .then(value => {
                            value.forEach(item => {
                                console.log(value);
                                let postDiv = document.createElement('div');
                                postDiv.classList.add('item');

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
                                commentsDiv.classList.add('comments');


                                postDiv.append(postIdDiv, postUserIdDiv, postTitleDiv, postBodyDiv);

                                postsDiv.append(postDiv, buttonCom, commentsDiv)

                                buttonCom.onclick = function () {
                                    if (commentsDiv.childElementCount === 0) {
                                        fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                                            .then(value => value.json())
                                            .then(value => {
                                                value.forEach(item => {
                                                    console.log(value);

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

                            })
                        })
                }

                postsDiv.classList.toggle('visible')
            }


            boxDiv.append(itemDiv, buttonPost, postsDiv);
        })
    })
