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


menu.addEventListener('click',(event)=>{
    event.stopPropagation();
    navMenu.classList.toggle("hideMenu");
    menu.classList.toggle("iconClicked");
    
})

window.addEventListener('click', ()=>{
    navMenu.classList.add("hideMenu");
    menu.classList.toggle("iconClicked");

})
