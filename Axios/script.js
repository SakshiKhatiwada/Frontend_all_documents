
const url = 'https://jsonplaceholder.typicode.com/posts';

//Basic usage: GET request
axios.get(url)
    .then(response => {
        console.log(response.data);
        print(response.data);
    })
    .catch(error => {
        console.error('error: ', error);
    })

//POST request
axios.post(url,{
    title: "new post",
    body: "hello hi",
    userId: 11
}).then(response => {
    console.log('data is posted: ', response.data);
    printOne(response.data);

}).catch(err=>{
    console.error('error posting data', err);
});

// func to print data:
const print = (data) => {

    const main = document.querySelector('main');

    data.map(el => {
        const element = document.createElement('div');
        element.classList.add('element');

        element.innerHTML = `<div class='element'>
    <h1>ID ${el.id}: ${el.title}</h1>
        <div>
            ${el.body}
        </div>
    </div>`;

        main.appendChild(element);
    })
}

const printOne = (data) => {
    const main = document.querySelector('main');
    const element = document.createElement('div');
    element.classList.add('element');

    element.innerHTML = `<div class='element'>
<h1>ID ${data.id}: ${data.title}</h1>
    <div>
        ${data.body}
    </div>
</div>`;

    main.appendChild(element);

    
}