//Promise -> came to solve Callback Hell or Pyramid of Doom
//it's a pending state

//Pseudo API (we get them from backend but for now we are making it)
// function fetchData (id){
//     setTimeout(()=>{
//         if (id>500)
//             {
//             console.log({name: "Sakshi", age: 19}); // working with objects
//             }
//         else
//             {
//                 // console.log({error: "Data Not Found!"});
//                 throw new Error ("Data not found!");
//             }
//     })  //if 2nd parameter is not given, it is 0 by default
// }

// try {
//     fetchData(100);
// } catch(error) {
//     console.log(error, error.value);
// }


// same thing using promise
function fetchData (id){
  
    //Promise takes a callback func whose parameter is two function (also callback we can say): resolve() and reject() provided by js itself
  return new Promise( (resolve, reject) =>
    {
    setTimeout(()=>{
        if (id>500)
            {
            resolve({name: "Sakshi", age: 19}); 
            }
        else
            {
                // console.log({error: "Data Not Found!"});
                reject("Data not found!");  //reject msg
            }
    })
} ) 
}

// fetchData(200); -> error arised because we didn't handle the promise using .then and .catch 🤦‍♀️

//The stuff we do as a frontend developer:

//API call
// fetchData(600).then((resultReturned)=>{
//     console.log("Fulfilled:", resultReturned);
// }).catch((errorMsg) => {
//     console.log("Error:", errorMsg);
// });

//to make it more readable:
fetchData(600)

    .then((resultReturned)=>{
    console.log("Fulfilled:", resultReturned);
        })

    .catch((errorMsg) => {
    console.log("Error:", errorMsg);
        });