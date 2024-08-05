
let arr = [
    {
        id: 100,
    }, 
    {
        id: 105,
    }, 
    { id: 108,},
    { id: 110, }
];

//we created a new array with just IDs
let idArray = arr.map(obj => obj.id);


//finding max and min id
// let min = Math.min(idArray); //will result in NaN because the function sees a single array object instead of separate numbers.
let minId = Math.min(...idArray); //The spread operator (...) expands the array into individual elements.
let maxId= Math.max(...idArray);
console.log(`max id = ${maxId} and min id = ${maxId}`);

//to find missing IDs
let missingIDs = [];

for (let id = minId;id<=maxId; id++)
    {
        if( !idArray.includes(id))
            {
                // missingIDs[i] = id; -> to avoid creating new variable we will use push
                missingIDs.push(id);
            }
    }

    console.log("All the missing IDs are: ",missingIDs);

    //key things used:
    /*
    map()
    Math.min ()
    Math.max ()
    includes()
    push()
    */


    //extra dimag lagayeko rough work 
    /*
    // function returnObject(idNum){
// return {
//     id: idNum,
// };
// }

// const minId = 100, maxId = 5000;
// let IDcollection = [];
// for (let i=minId, j=0; i<=maxId; i++,j++){
//     IDcollection[j]=i
// }
// console.log(IDcollection);


    */