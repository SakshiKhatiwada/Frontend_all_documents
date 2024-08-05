//callback concept //callback function-> a func PASSED as a paramter to another function
//Higher order func -> a func that OPERATES on other func either by taking them as an argument or returning them
function getAge(){
    console.log(19);
}

function getDetail (callbackFunc){
    console.log("Your age miss");
    callbackFunc(); 
}

getDetail (getAge);


//2) Concept of Asynchronous
console.log(1);

setTimeout(()=>{
    console.log(2);
},0);

console.log(3);

function getData(id , getNextData){
    //to make it asynchronous
    setTimeout( 
        () => {
            console.log("data", id);
            if (getNextData){   //if getNextData() exists
                getNextData();
            }
        },2000)
}


//Callback Hell
getData (1, ()=>{
    console.log("Data no. 2 loading");
    getData (2, ()=>
    {
        console.log("Data no. 3 loading ");
        getData (3, ()=>{
            console.log(
                "Data 3 loaded successfully");
                getData(4); //func is not passed to stop now
            
        })
    })
})