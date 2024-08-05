//1) arrayname.filter(testFunc): returns a new array that satisfies the test func

let array = [ 2, 3, 4, 7, 9];

// let filtered_array = array.filter(GreaterThan3) //just func name, not ()
let filtered_array = array.filter(
    (a) => a>3  //arrow func
) 

// function GreaterThan3 (element)
// {
    //     return element>3;
    // }
    // console.log(filtered_array);
    
    let strArray = ["Sakshi", "Sashi", "Navika","Bishakha"];
    let filtered_str = strArray.filter(
        (str) => str.toLowerCase().includes("sa")
    )
    // console.log(filtered_str);

//2) array.find(testFunc): returns the first element that satisfiesa the test func

let found_element= array.find(
    (a) => a>300 //returns boolean value
)
// console.log(found_element); //returns only one element, the first one. If not found, returns undefined

//3) findIndex: returns index of first element found
let index_of_found_element= array.findIndex(
    (a) => a>300 //returns boolean value
)
// console.log(index_of_found_element);    //-1 if test func not satisfied

// console.log(array.indexOf(300));






