// console.log(null != null);   //false

// console.log(null % 2 === 0);    //true
// console.log(undefined % 2 === 0);   //false

// console.log()

// let arr=[[1,2],[3,4,5],6,[7],[8,9,10]];
// console.log(arr[4][2]);
// console.log(arr.flat(Infinity).at(-1));
// console.log(arr.at(-1).at(-1));


// let obj={
//     myName: "Sakshi",
// }
// // console.log(obj["0"]);  //undefined

// function validateEmail(email){
// if (!email.includes(" "))
// {let splittedArray =email.split('@');
//     if(splittedArray.length===2)
// var [userName,domain] = splittedArray; //array destructuring
//     else 
//     {console.log("only one @ is allowed.");
//         return;
//     }

// let lastPart = domain.split('.');
// if (lastPart.length===2)
// var [domainName, tld] = lastPart;
// else
// {console.log("only one . is allowed.");
//     return;
// }
// }

// else {
//     console.log("email not validated. Try again!");
// }
// }
// let email = "sakshikhatiwada@gmail.com";

// validateEmail(email);


//---------------Date and Time
// var geeks = new Date(2014, 10, 24, 10, 33, 30, 0); 

// console.log("date: ", geeks);	

// let date1=new Date(2024,6,25), date2= new Date(2024,6,14);  //0 indexing is used, it took 6 as july

// let diff = date2.getDate() - date1.getDate() ;
// console.log(date2.getDate(), date1.getDate(),diff);

// console.log(new Date());    //while printing, it starts the count from 1
// console.log(previousMonth.getMonth());
// console.log(previousMonth);

// if (diff < 0){
//     let previousMonth = new Date(2024,6,0); //last 0 makes it the last day of previous month
    // diff += previousMonth.getDate();
    
// }
// console.log(diff);  