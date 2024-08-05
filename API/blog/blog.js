const url ="https://restcountries.com/v3.1/all";

let boxes= document.querySelectorAll(".box");
// console.log(boxes);

async function getData(){
    let response = await fetch(url);

    if(!response.ok){
        console.log("Error!", error);
    }

    console.log(response);
    let variable = await response.json();
    console.log(variable);
    
    
      variable.forEach((country,index)=>{
        element = country.name?.official;
        
        if (index<3){

            boxes[index].innerHTML +=`<br>     Official: ${element}<br> 
            Capital: ${country.capital} `;
            boxes[index].style.textAlign= "center";
        }        
      })     
    }