let add = document.querySelector(".addBtn");
let body = document.querySelector(".body");
let count = 0; //for the value inside the content boxes

add.addEventListener('click',()=>{
    let content = document.createElement("div");
    content.classList.add("content");
    count++;
    content.textContent = count; 

    body.appendChild(content);

})

body.addEventListener('click',(event)=>{
   if(event.target !== body){
    event.target.remove();
   }
})