let boxDiv = document.getElementById('box1');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        value.forEach(item => {

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item1')
            const idDiv = document.createElement('div');
            idDiv.innerText = 'id: ' + item.id;
            const nameDiv = document.createElement('div');
            nameDiv.innerText = 'name: ' + item.name;

            let aDetails = document.createElement('a');
            aDetails.href = `user-details.html?id=${item.id}`;

            let buttonDetails = document.createElement('button');
            buttonDetails.innerText = 'User-Details';

            aDetails.appendChild(buttonDetails);
            itemDiv.append(idDiv, nameDiv, aDetails);
            boxDiv.append(itemDiv);

        })
    })

