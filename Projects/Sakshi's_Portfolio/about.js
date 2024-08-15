// let darkmodebtn = document.querySelector(".darkmodebtn");
// let darkElements = document.querySelectorAll(".white");
// console.log(darkElements);



// //onclick func
// function darkmode(){
// //darkElements is an array
// for (let i=0; i<darkElements.length; i++){

//     darkElements[i].classList.toggle("dark");
// }

// body.classList.toggle("dark");
// body.style.color = "white";
// }




//for hamburger menu
let menu = document.querySelector(".fa-bars");
let navMenu = document.querySelector(".menu");
let bodyContainer = document.querySelectorAll(".bodyContainer");
let backIcon = document.querySelector(".fa-arrow-left");

menu.addEventListener('click',(event)=>{
    event.stopPropagation();
    navMenu.classList.remove("hideMenu");
    navMenu.classList.remove("hidden");
    navMenu.classList.add("showMenu");
    navMenu.style.display = "block";
    
})

window.addEventListener('click', (event)=>{

   
    if (navMenu.classList.contains("showMenu"))
    {
        if(event.target == backIcon || this && event.target != navMenu){

        navMenu.classList.add("hideMenu");
        navMenu.classList.remove("showMenu");
        
        navMenu.classList.add("hidden");
        
        setTimeout(()=>{
            navMenu.style.display ="none";
        },4000);
        }
}

})


// for contact information
let sendButton = document.querySelector(".send");
let inputs = document.querySelectorAll("input");

sendButton.addEventListener('click',()=>{
for (let i=0; i< inputs.length; i++)
{
    console.log(inputs[i].value);
}
})

