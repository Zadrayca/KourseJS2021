// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let boxDiv2 = document.getElementById('box2');

let params = new URLSearchParams(document.location.search);
let userId = params.get("id");
console.log(userId);


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(item => item.json())
    .then(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item2')
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
                            postDiv.classList.add('item3');

                            let postTitleDiv = document.createElement('h3');
                            postTitleDiv.classList.add('block');
                            postTitleDiv.innerText = item.title;

                            let aDetails = document.createElement('a');
                            aDetails.href = `post-details.html?id=${item.id}`;

                            let buttonDetails = document.createElement('button');
                            buttonDetails.innerText = 'Post-Details';

                            aDetails.appendChild(buttonDetails);

                            postDiv.append(postTitleDiv, aDetails);

                            postsDiv.append(postDiv)


                        })
                    })
            }

        }
        boxDiv2.append(itemDiv, buttonPost, postsDiv);

    })
