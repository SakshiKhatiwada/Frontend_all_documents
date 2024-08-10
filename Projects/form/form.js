//Key Learning:
// The key point is that setting up the event listener happens synchronously within the display() function, but the execution of the event listener's callback function happens asynchronously in response to the event.
//event listener is set when the function runs, and after that we can trigger it any time!






let inputs = document.querySelectorAll("div input");
const url ="https://jsonplaceholder.typicode.com"
// console.log(inputs);

let submit = document.querySelector(".button");
let Name = document.querySelector(".name");
let phoneNo = document.querySelector(".phoneNo");
let gmail = document.querySelector(".gmail");
let container = document.querySelector(".container");



// console.log(submit,Name, phoneNo,gmail);
// console.log(submit.value,Name.value, phoneNo.value,gmail.value);

fetch(`${url}/posts`).then(res=>res.json())
.then(data=>
 { console.log(data);}
).catch(err=>{
    console.log(err);
})




submit.addEventListener("click",(e)=>{
    e.preventDefault();

    fetch(`${url}/posts`,{
        method: "Post",
        body: JSON.stringify({
            "usedId": 5,
            "title": "this is trial",
            "Name": `${Name.value}` ,  
            "phoneNumber": `${phoneNo.value}`,
            "gmail": `${gmail.value}`,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }

    }).then((response)=>{
        return response.json();//converts into js object
    }).then(data=>{
        displayPost(data);
        console.log(data);
    }).catch(err=>{
        console.log("Error: ",err);
    })
})

//displaying post function
function displayPost(post)
{
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.setAttribute("id",post.id);

    let h1=document.createElement("h1");
    h1.innerText= `${post.Name}`;

    let p = document.createElement("p");
    p.innerHTML=`<br>Gmail ID: ${post.gmail}<br>Contact no.: ${post.phoneNumber}`;

    let dltButton = document.createElement("button");
dltButton.classList.add("dltButton");
dltButton.innerText = "Delete";
    
    

//deleting post 
dltButton.addEventListener("click", function(){
    alert("proceeding to dlt: ");

    let id= postDiv.getAttribute("id");
 
    fetch(`${url}/posts/${id}`,{
     method: "Delete",
    }).then((response)=>{
     if(response.status === 200){
         postDiv.remove();
     }
     else{
         alert("failed to delete");
     }}).catch(err=>{
         console.log(err);
     })
 }
 );

 

 postDiv.append(h1,p,dltButton);
    container.append(postDiv);
}
    


