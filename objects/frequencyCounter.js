let counter = {}; //initially it's empty
let log = console.log;
let array = [2,3,2,4,5,8,1];

log(counter);

for(let i=0; i<array.length; i++)
{
    let currentElement = array[i];
    // log (currentElement);
    // log(counter[currentElement]);   //undefined

    if(counter[currentElement]==undefined){
        counter[currentElement]=1;
    }
    else{
        counter[currentElement]++;
    }
}

log(counter);