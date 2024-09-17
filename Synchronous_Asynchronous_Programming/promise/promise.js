let promise  = new Promise(function(Resolve,Reject){
   Reject('Error: sth went wrong'); //the one called here is the one used in .then(f1,f2)
})

console.log(promise);
// console.log(promise.state," ",promise.result);   //---can't acess like this, we need the method to handle promises

promise.then(
    function(value)
    {
        //func 1, if promise is resolved
        console.log("resolved");
    },
    function(error)
    {
        //func 2, if promise is resolved
        console.log(error);
        console.log("rejected");
    }
)