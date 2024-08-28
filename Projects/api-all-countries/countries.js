//declarations and selections
let log = console.log;
let allPages = 15;

// log(darkmode);

let ul = document.querySelector(".pages");
let prevBtn = document.querySelector("prev");
let nextBtn = document.querySelector("next");
let pagination = document.querySelector(".pagination");
let countryContainer = document.querySelector(".country-container");
let select = document.querySelector("select");
let option1 = document.querySelector("select option");


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


//--------------Printing on UI
function print(data){
    countryContainer.innerHTML=``;
    // log('datalength: ',data.length);
    for(let i=0; i<data.length; i++)
        {
            let country = document.createElement('div');
            country.classList.add("country");
        
            // let population = data[i]?.population;
            // let area = data[i]?.area;
        
        
        
            country.innerHTML=`<img src=${data[i]?.flags?.png} alt="${data[i]?.flags?.alt}">
            <div class="info"><hr>
            <h3>${data[i]?.name?.common}</h3><hr>
            <div>
            <b>Continent: </b>${data[i]?.continents}
            </div>
            
            <div>
            <b>Population: </b>${data[i]?.population}
            </div>
        
            <div>
            <b>Area: </b>${data[i]?.area}
            </div>
        
            </div>
            `;
        
            countryContainer.appendChild(country);
        
}}

function countrySelected(){
    log("country selected activated");
    // clicking on the individual country for more info
let allCountries = document.querySelectorAll(".country");
// log(allCountries);

//forEach loop
allCountries.forEach(country=>{
    country.addEventListener('click',event=>{
        log(event.currentTarget);//event.target vs event.currentTarget
        const clickedCountryElement= country.querySelector(".info h3");
        // const countryName = clickedCountryElement.textContent;
        // log(countryName);
        // window.location.href='';
        window.location.href="individual-country.html"
        window.localStorage.setItem('country-name',clickedCountryElement.textContent);
    })
})
}



//fetching all the countries

// let url = fetch("https://restcountries.com/v3.1/all");
let url = fetch("https://restcountries.com/v3.1/all?fields=name,capital,continents,population,area,region,flags");
//filtered url

url
.then((reply)=>
{
    // console.log(reply.json());
    return reply.json();
})
.then(data =>{
// console.log(data);
// console.log("printing data: \n");
// console.log(data[0].name?.common,'\n', data[0].capital[0], data[0].languages?.eng, data[0].area, data[0].flag, data[0].continents[0]);
print(data);
countrySelected();


})
.catch(error=>{
    console.log(error);
    // console.log(error, 'error', error.message);
})



//Searching
let search = document.querySelector("input[type='search']");
// log('search',search);    
 

search.addEventListener("input",()=>{
    // log(search.value);
    let searchedCountry;
    // value =search.value;


    if (!search.value == '')
     searchedCountry = fetch(`https://restcountries.com/v3.1/name/${search.value}`);
    else{
        searchedCountry = url;//if input box is empty, go with the default url
    }
        searchedCountry.then(response =>{
            return response.json();
        }).then(country=>{
            // log(country);
            // log(country[0]?.name?.common);
            print(country);countrySelected();
        }).catch(error=>{
            log(error);
        })       
        
        select.value = option1.value;
        // select.value = 'default';    -> this doesn't work
        
})


//Selecting by region:



select.addEventListener('change',()=>{

    // log(select.value);
    let searchedRegion = fetch(`https://restcountries.com/v3.1/region/${select.value}`);

    searchedRegion.then(response=>{
        return response.json();
    }).then(countryByRegion =>{
        print(countryByRegion);countrySelected();
    }).catch(err=>{
        log(err);
    })

    search.value = ``;
    
})


// darkmode
let darkmode = document.querySelector(".fa-moon");
let heading = document.querySelector("header");
let searchBox = document.querySelector(".search-container");
let options = document.querySelectorAll("select option");
let selectBox = document.querySelector(".filter")

darkmode.addEventListener('click',()=>{
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "grey";
    document.body.classList.toggle('dark-mode');
    select.classList.toggle('dark-mode-box');
    selectBox.classList.toggle('dark-mode-box');
    heading.classList.toggle('dark-mode-box');
    search.classList.toggle('dark-mode-box');
    searchBox.classList.toggle('dark-mode-box');
    
    
    options.forEach(data=>{
        // log(data.textContent);
        data.classList.toggle('dark-mode-box');
    })
})


