const log = console.log;

// Recap 
{
    let obj = {
    name : "nabin",
    age : 20,
    }
}
// log(obj.name);
// log(obj["name"]);}


// NOTE- we can also use reserved words as key
{   
    let obj = {
        for : "for",
        while : "while value",
        let : "letting",
    }
    // log(obj.for);
    // log(obj.while);
    // log(obj.let);
}

// 1. Methods are functions stored as object properties.

// use "this" keyword to access property of own 
{
    const obj = {
        name : "manish",
        age : 20,
        printName : function(){
            log("Name : ", this.name);
        },
        printAge : function(){
            log("Age : ", this.age);
        }
    }
    // obj.printName();
    // obj.printAge();
}


// 2. Nested Objects
    // Objects can contain other objects, allowing for complex data structures.
    
    {
        let obj = {
            name : "bire",
            age : 20,
            address: {
                province : "sudurpaschim",
                village : "dharampur",
            }
        }
        // log(obj.name); 
        // log(obj.age); 
        // log(obj.address.province); 
        // log(obj.address.village); 
        
        let original = {
            name : "bire",
            age : 20,
        }
        
        // copy is same as original
        let copy = original; // copy
        
        // copied is different then original
        let copied = { ...original };
        
        copy.name = "bibek";
        copy.age = 22;
        
        // log("copy : ", copy);
        
        // // objects are stored as a reference;
        // log("original : ", original);
        // log("copied using ... : ", copied);
        
        
        // they are stored as a value
        // let originalVal = 2;
        // let copiedval = val;
        
        // copiedval = 20;
        // log(originalVal);
    }

{
// 3. Object Destructuring
// A convenient way to extract properties from objects into variables.    
let obj = {
    name : "bibek",
    age : 20,
}

// let Name = obj.name;
// let age = obj.age;

let { name : NAME , age } = obj;
// use : for renaming

// log(NAME, age);

{
    // nested destructuring
    let obj = {
            name : "bire",
            age : 20,
            address: {
                province : "sudurpaschim",
                village : "dharampur",
            }
        }
    
    // let province  = obj.address.province;
    let {  address : {
                    province,
                    village 
                    }
        } = obj;
    // log(province, village);
        
}

}



    
// 5. Object Methods
    // JavaScript provides several methods for working with objects.    
    // 1. Object.keys()
    // 2. Object.values()
    // 3. Object.entries()
    
    {
        let obj = {
            red : "apple",
            green : "gauva",
            yellow : "mango",
        }
        
        // log(Object.keys(obj));
        // log(Object.values(obj));
        
        // for(let value of Object.values(obj)){
            // log(value);
        // }
        
        
        // for(let key in obj){
        //     // we cannot use . if key is in any varibale
        //     log(key , ":", obj[key]);
        // }
        
        // log(Object.entries(obj));
    }
    
    
    
    
    {
        
        
        let obj = {
            subject : "js",
            age : 20,
            address : {
                village : "ktm",
                city : "pokhara",
            }
        }
        
        // log(obj.subject); // js
        // log(obj.age); // 20
        // log(obj.address.village); // ktm
        // log(obj.address.city); // pokhara
        
    }
    {
        
        // object des
        let obj = {
            subject : "js",
            age : 20,
            address : {
                village : "ktm",
                city : "pokhara",
            }
        }
        
        let SUB = obj.sub;
        let Age = obj.age;
        // let VILLAGE = obj.address.village;
        // log(VILLAGE);
        // log(obj.address.village)
        
        
        let { subject : Subject , age , address: {village : VILLAGE, city}} = obj;
        
        
        log(obj.address.village);
        log(Subject , age , VILLAGE, city);

    }