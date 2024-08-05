//functions as object properties
let obj = {
    Name: "Sakshi",
    printName : function ()
    {
        // console.log("Name: ", this.Name);   //this keyword
    }
}

obj.printName();

//2. Nested Objects

let original = {
    name : "Sakshi",
    age : 19,
    address : {
        city: "Mahendranagar",
    }
}

// console.log(obj2.address.city);

let copy = original;

// console.log(copy);
// copy.name = "bine";
// console.log("copied after manipulation", copy);
// console.log("original after copy is manipulated", original);

let anotherCopy = {...original};    //using spread operator

anotherCopy.name = "binite";

// console.log("copied using ... anotherCopy:", anotherCopy);
// console.log("copied using ... original:", original);

//3 Object Destructuring

let {
    name,
    age,
    address: {
        city: CITY  //renaming using : 
    }
} = original;

console.log(name, age, CITY);
