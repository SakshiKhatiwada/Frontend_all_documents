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


  // let val = 'hi';

  // value2 = `this is ${val}`;
  // console.log(value2);

  
let ul = document.querySelector(".pages");
let prevBtn = document.querySelector("prev");
let nextBtn = document.querySelector("next");
let pagination = document.querySelector(".pagination");

  function pageView(totalPages, currentPage){
    let before= currentPage-2;
    let after= currentPage+2;
    let liCurrentStatus = '';
    pagination.innerHTML='';

    ul.innerHTML='';
   


    pagination.innerHTML = `<button class="prev btn" onclick="pageView(${totalPages},${currentPage-1})"><i class="fa-chevron-left fa-solid"></i> Prev</button>`;


    //for UI
    
    for (let pagelength=before; pagelength<= after; pagelength++)
    {

        if(pagelength<1 || pagelength>totalPages)
            continue;


        if(pagelength==currentPage){
            liCurrentStatus='active';

        }else{
            liCurrentStatus='';
        }

        
        ul.innerHTML += `<li class="page ${liCurrentStatus}">${pagelength}</li>`
    }
    
    
    pagination.innerHTML += ul.innerHTML +
     `<button class="next btn" onclick="pageView(${totalPages},${currentPage+1})">Next <i class="fa-chevron-right fa-solid"></i>
     </button>`;
    // log('inner html',pagination.innerHTML);
}

// pageView(allPages,4);