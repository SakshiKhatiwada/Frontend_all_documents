let url ="https://restcountries.com/v3.1/all";

//Syntax: fetch (url,[options]); options by default is GET among GET, POST, UPDATE(PUT,PATCH), DELETE, OPTIONS -->fetch() returns promise

let response = null;

// if (response.OK){
//     let countryName = response.json();
//     console.log(countryName);
// }

// else {
//     console.log("Error");
//     let countryName = response.json();
//     console.log(countryName);
// }

//We need the concept of Async function

async function getAPI (){
    response = await fetch(url);
    
if (response.ok){
    let countryName = await response.json();  //this also returns promise, we have to await here too
    console.log(countryName);
}

else {
    console.log("Error");
}
}
