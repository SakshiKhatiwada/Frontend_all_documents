let darkmodebtn = document.querySelector(".darkmodebtn");
let darkElements = document.querySelectorAll(".white");
console.log(darkElements);


let body = document.body;
console.log(body);

// darkmodebtn.addEventListener('click',()=>{
//     darkmode();
// })

//onclick func
function darkmode(){
//darkElements is an array
for (let i=0; i<darkElements.length; i++){

    darkElements[i].classList.toggle("dark");
}

body.classList.toggle("dark");
body.style.color = "white";
}