// let response = fetch("https://restcountries.com/v3.1/all");
// console.log(response);

// // if (response.ok)
// // {
// //     console.log(response.json());
// // }

// response
// .then((reply)=>
// {
//     // console.log(reply.json());
//     // throw new Error("sth went wrong");   //just checking
//     return reply.json();
// })
// .then(data =>{
// console.log(data);
// console.log("printing data: \n");
// console.log(data[0].name?.common,'\n', data[0].capital[0], data[0].languages?.eng, data[0].area, data[0].flag, data[0].continents[0]);
// })
// .catch(error=>{
//     console.log(error);
//     // console.log(error, 'error', error.message);
// })
// //then, catch, finally-> they take arrow functions

//2
// Replace 'Europe' with the desired region
const region = 'Europe';
const url = `https://restcountries.com/v3.1/region/${region}`;

// Fetch data from the API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error('There was a problem with the fetch operation:', error);
  });