// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


let text2 = `{"employees" : [
{"firstName": "Sakshi",
 "lastName": "Khatiwda"},
{"firstName": "Suwarna", 
"lastName": "Khatiwada",
"age": 19}  
]
}`;//number doesn't need quotation and can't write comment inside JSON because of course duh backtick is enclosing it 

//to convert json to js object
result2 = JSON.parse(text2);
console.log(result2);

output2 = JSON.stringify(result2);
console.log(output2);   //comes in one line as a string

let obj2= {
    Name: "Sakshi",
    Age: 19,
}

console.log(JSON.stringify(obj2));//{"Name":"Sakshi","Age":19}