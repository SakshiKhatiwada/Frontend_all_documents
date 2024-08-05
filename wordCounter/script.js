document.addEventListener("DOMContentLoaded",()=>{



let textarea = document.querySelector(".text");

let spanC = document.querySelector(".spanC");
let spanW = document.querySelector(".spanW");

//to check if it is linked properly
if (!textarea || !spanC || !spanW) {
    console.error("Textarea or span elements not found.");
    
}
textarea.addEventListener('input',()=>{
    console.log(textarea.value);
  
    spanC.textContent = textarea.value.length;
    
    let value2= textarea.value;
    let array= [];
      

        array = value2.trim().split(" ");
      
        spanW.textContent = array.filter(word => word.length>0).length;
    
})

})