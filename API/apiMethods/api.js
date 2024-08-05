let container = document.querySelector(".container");
const url ="https://jsonplaceholder.typicode.com";
let id = 1;

let postData = {
    "title": "hi",
    "body":"this is trial",
    "userId": 5,
    "id": 20
}


// console.log("HIIIIIIIIIIII");
// let promise = fetch(`${url}/posts`, {
//     method: "POST",
//     body: JSON.stringify(postData),
   
// });
// // console.log(promise);


// promise.then((res)=>
// {
//     console.log("res: ",res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data: ",data);
// }).catch(err=>{
//     console.log("Error Occurred: ", err);
// });

//get
 
async function getPost(){
    let response = await fetch(`${url}/posts`);

    if (!response.ok){
        console.log("error status code: ", response.status);
    }

    console.log("result: ",response.json());

}

//update: PUT or PATCH
let updateId=5;

async function updatePost(){
    let response = await fetch (`${url}/posts`,{
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-type' : 'application/json; charset= UTF-8',
        }
    });

    if (!response.ok){
        console.log("error, status code: ",response?.status);
    }

    console.log("result",await response.json());
}

//delete post
let deleteId = 4;
async function deletePost(){
    let response = await fetch(`${url}/posts/${deleteId}`,{
        method:"DELETE",
    });

//     if (!response.ok){
//         console.log("Error occurred! status code: ", response.status);
//     }

//     else{
//         // console.log(response, response.id);
//    console.log("Result:", await response.json().id);
//    console.log(`id ${deleteId} is deleted successfully.`);
    // }

    if (response.status===200){
        console.log("deleted successfully");
    }
    else{
        console.log("deletion failed");
    }
}