//Object defn:

let obj = {
    Name: "Sakshi", 
    Faculty: "CSIT",
    Semester: 4,
}


// console.log(obj);
// console.log(obj.Name);
// console.log(obj[Name]);  //error, because the keys in objects are saved as strings. Without "", it is considered variable here
// console.log(obj["Name"]);

//Spread Operator ... -> copies value of original  object into new object

let newObject = {...obj, address:"mnr"};    //We can also add new key-value pairs 
// console.log(newObject);

//rest operator ... -> we do object destructuring and let the remaining elements make a new object
//object still exists, we just copy some values to new variable

let{Name,Faculty, ...restObject} = obj;
// console.log(Name, Faculty, restObject);
// console.log(obj);   

//func and arrays in object
//we can also give arrays and functions as object's values

let obj3 = {
    myName: "Sakshi",
    myAge: "19",
    subjects: ["os", 'js', 'dsa'],
    printing: function (){
        // console.log("my name is: ",this.myName)
    }
}

// console.log(obj3);
// obj3.printing();


let fruits = ["mango", 'apple'];
let indexed_