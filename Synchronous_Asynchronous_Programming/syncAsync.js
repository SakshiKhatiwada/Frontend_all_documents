function first (){
    console.log(1);
}

function second (){
    //making this func asynchronous -> runs after every other synchronous instructions complete running
    setTimeout(()=>console.log(2)
,0 )
//syntax: setTimeout (callbackFunc, delay time in milliseconds)
}


function third (){
    console.log(3);
}


function forth (){
    console.log(4);
}

first();
second();
third ();
forth();