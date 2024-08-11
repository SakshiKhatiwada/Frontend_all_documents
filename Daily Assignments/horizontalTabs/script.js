
let content1 = document.querySelector(".content1");
let for1 = document.querySelector(".for1");
let content2 = document.querySelector(".content2");
let for2 = document.querySelector(".for2");
let content3 = document.querySelector(".content3");
let for3 = document.querySelector(".for3");

//initially React is selected
content1.classList.add("addDesign");

content1.addEventListener("click",function()
{
    content1.classList.add("addDesign");
    content2.classList.remove("addDesign");
    content3.classList.remove("addDesign");
    for1.style.display="block";
    for2.style.display="none";
    for3.style.display="none";
});
content2.addEventListener("click",function()
{
    content2.classList.add("addDesign");content3.classList.remove("addDesign");
    content1.classList.remove("addDesign");

    for3.style.display="none";
    for2.style.display="block";
    for1.style.display="none";
});

content3.addEventListener("click",function()
{
   content3.classList.add("addDesign");
   content1.classList.remove("addDesign");
   content2.classList.remove("addDesign");
    for3.style.display="block";
    for2.style.display="none";
    for1.style.display="none";
})
