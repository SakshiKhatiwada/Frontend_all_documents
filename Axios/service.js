//Now we can use the interceptor we created
import axiosInstance from "./axiosClient.js"
const main = document.querySelector('.main');


async function fetchData(id = 0) {

    try {
        let res;

        if (id === 0) {
            res = await axiosInstance(`/users`);
            printData(res.data);

        }
        else {
            res = await axiosInstance(`/users/${id}`)
            printUser(res.data)
        }
        // console.log('res: ', res);
        // console.log('user data: ', res.data);


    }
    catch (err) {
        console.log('error occurred: ', err.message);
        errormsg(err.message, err.status);
    }
}

//executing this function
fetchData();

const printData = (data) => {
    main.innerHTML = ``;
    data.map(el => {
        const element = document.createElement('div');
        element.classList.add('element');
       
       
        element.innerHTML = `
        <div class='element'>
    <h1>ID ${el.id}: ${el.name}</h1> <hr/>
        <div>
            <b>username:</b> ${el.username}
        </div>
        <h6>click for more information...</h6>
    </div>`;

    main.appendChild(element);


        // main.appendChild(element,h1);        --> 📝 can only append one child
        // main.append(element,h1)              --> do this instead

        element.addEventListener('click', () => {
            console.log('clicked');
            //--> history.pushState(state, title, url);
            // window.location.href = `/users/${el.id}`;
            fetchData(el.id);
            console.log('el', el);
            // printUser(el)
        })

    })
}

//to open particular element



//error function
const errormsg = (msg, status) => {
    const error = document.createElement('div');
    error.innerHTML = `<h1 class='errormsg'>Error Occurred! ${msg}
                        ${status == 401 ? '⛔' : "💥"}
                        </h1>`;
    main.appendChild(error);
}

//Print one user
const printUser = (el) => {
    main.innerHTML = ``;
    const element = document.createElement('div');
    element.classList.add('user');

    element.innerHTML = `
    <button class='back'> Back</button>
    <div class='user'>
    <h1>ID ${el.id}: ${el.name}</h1> </hr>
        <div>
             <b>Username:</b> ${el.username}
        </div> 
        <div>
             <b>Address:</b> ${el.address?.street}
        </div> 
        <div>
             <b>Email:</b> ${el.email}
        </div> 
        <div>
             <b>Company:</b> ${el.company.name}
        </div>
        <div>
             <b>Phone:</b> ${el.phone}
        </div>
        <div>
             <b>Website:</b> ${el.website}
        </div>
    </div>`;

    main.appendChild(element);

    const backBtn = document.querySelector('.back');
    backBtn.addEventListener('click', () => {
        fetchData();
    })
}