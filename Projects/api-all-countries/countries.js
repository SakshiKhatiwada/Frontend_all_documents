//declarations and selections
let log = console.log;
let allPages = 15;
let darkmode = document.querySelector("header div i");
// log(darkmode);

let ul = document.querySelector(".pages");
let prevBtn = document.querySelector("prev");
let nextBtn = document.querySelector("next");
let pagination = document.querySelector(".pagination");
let countryContainer = document.querySelector(".country-container");


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

//fetch

let response = fetch("https://restcountries.com/v3.1/all");

response
.then((reply)=>
{
    // console.log(reply.json());
    return reply.json();
})
.then(data =>{
console.log(data);
console.log("printing data: \n");
console.log(data[0].name?.common,'\n', data[0].capital[0], data[0].languages?.eng, data[0].area, data[0].flag, data[0].continents[0]);

for(let i=0; i<data.length; i++)
{
    let country = document.createElement('div');
    country.classList.add("country");

    country.innerHTML=`
    <img src=${data[i]?.flags?.png} alt="${data[i]?.flags?.alt}">
    <div class="info">
    <h3>${data[i]?.name?.common}</h3>
    <div>
    <span>Continent: </span>${data[i]?.continents}
    </div>
    
    <div>
    <span>Population: </span>${data[i]?.population}
    </div>

    <div>
    <span>Area: </span>${data[i]?.area}
    </div>

    </div>
    `;

    countryContainer.appendChild(country);

}

})
.catch(error=>{
    console.log(error);
    // console.log(error, 'error', error.message);
})