let input = document.getElementById("input");

let passedRollNo = document.querySelectorAll(".passedRollNo");

// passedRollNo.forEach(function(element){
// if (!element.textContent.includes(input.value))
//     {
// element.style.display="none";
//     }
// })

// console.log("input values: ",input.value);
// let value=null;

// let search = input.addEventListener("keydown",function (event)
// {
//     // console.log(event);
// value = this.value;
//     if (!passedRollNo.value.textContent.includes(value)){
//         passedRollNo.style.display ="none";
//         console.log("Hi");
//     }
// })

input.addEventListener("input", function(event)
{
    passedRollNo.forEach(function (element){
    // console.log(element.textContent);

    if (!element.textContent.includes(input.value)){
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
    event.preventDefault();
    }
    )
})