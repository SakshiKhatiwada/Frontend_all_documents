let i;  //undefined
console.log(i,typeof(i));

let j=null; //null
console.log(j,typeof(j));

i=34;
//number
console.log(i,typeof(i));

//string
i="Sakshi";
console.log(i,typeof(i));

//bigint
i=23n;
console.log(i,typeof(i));

//boolean
i=true;
console.log(i,typeof(i));

let object = {      //equal to is needed
    name: 'Sakshi', //colon is used to assign
    age: 19,        //comma separated
};

console.log(object);