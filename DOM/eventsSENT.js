  let formElem = document.querySelector("#form");
  let name = document.querySelector("#name");

// keyboard Events 
// ------------------------------------------------
// fires before change is made to the input box
  formElem.addEventListener("keydown", function (e) {
    // console.log(e); // event object
    console.log(e.type, e.key);
    // console.log(name.value);
  });

  // doesnt works on special keys
  formElem.addEventListener("keypress", function (e) {
    console.log(e.type, e.key);
    // console.log(name.value);
  });

  // fires after change is made to the input box
  formElem.addEventListener("keyup", function (e) {
    console.log(e.type, e.key);
    console.log("value", this.firstElementChild.value);
  });

  name.addEventListener("focus", function () {
    name.style.background = "red";
  });
  name.addEventListener("blur", function () {
    name.style.background = "green";
  });




// Mouse Events 
// ------------------------------------------------
let btnElem = document.querySelector("#btn");

btn.addEventListener("mouseenter", function(){
    console.log("you are entering in my boundary");
});

btn.addEventListener("mouseleave", function(e){
    console.log("you are leaving in my boundary");
    console.log(e.clientX, e.clientY);
});
