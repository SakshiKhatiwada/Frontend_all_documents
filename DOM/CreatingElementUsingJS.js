// console.log(1);

let divElement = document.createElement("div");
// console.log(divElement);    //upadtes, because it is live
divElement.className="container";
divElement.textContent="Div created using JS";
//not visible in browser? not appended inside body yet
// console.log(divElement);

divElement.id="idOfContainer";
document.body.appendChild(divElement);//now visible on the browser screen

//creating a paragraph now
let para = document.createElement("p"); //give tag name inside
para.className="para";
para.id="para1";
para.textContent="This is a sample paragraph";
document.body.appendChild(para);

// console.log(para);

//creating comment
let comment = document.createComment("comment msg");
document.body.prepend(comment); //append -> puts in last, prepend-> puts in first
// console.log(comment);

divElement.appendChild(comment);    //couldn't give two comments
divElement.appendChild(comment);    //couldn't give two comments

//creating text node
let text=document.createTextNode("this is a text node");
document.body.prepend(text);
let text2=document.createTextNode("text to enter inside a div");
divElement.appendChild(text2);   //do like this, can't do long . . chaining
// console.log(text);  //quotation maa dinxa
// console.log(text.textContent);  //plain text