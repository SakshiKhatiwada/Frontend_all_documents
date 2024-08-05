// let url = "https://www.7timer.info/doc.php?lang=en";

let Country= document.querySelector("#countryName");
let log = console.log;
let url="https://restcountries.com/v3.1/all";

let returnedPromise = fetch(url);

// returnedPromise.then((value)=>console.log(value.json()))
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));

returnedPromise.then ((value) =>
{   //yo value bhaneko response naam ko object ho [object Response]
    // log(`json value is ${value.json()}`); //--> json value is [object Promise]
    log(` response value: ${value}`);
    log("response value: ", value);
    log(`value status: ${value.status} and value okay: ${value.ok}`);
    // log(value.text());   //value.text() and value.json() can't be executed together, it starts creating problem
    // log("value of value.json():",value.json());  //ek choti use garey dosro choti use garna mildaina
    return value.json();    
    //Returns a promise object with keys like status, ok, type, redirected, etc. that's why we used promise chaining to solve the provided promise
    //What's the need of returning promise? above is the reason -> to check before going for data which is in object form

}).then ((data) => {
    //   log(`data: ${data}`); //backtick use garey string bhaidinxa ?
   //[object Object] -> yo data object naam ko object ho
    
    data.forEach((country)=> {
           let para = document.createElement("p");
            para.textContent = `Country Name: ${country.name?.common}      |      Country timezones: ${country.timezones}`;
        // Country.appendChild(para);
        document.body.appendChild(para);
        });
    log("data:", data); 
}).catch((error) => {
    log("error:",error);
})