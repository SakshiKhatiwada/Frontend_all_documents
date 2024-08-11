// Write JavaScript code to declare a variable called  myName and initialize it with your name. Print the value of myName to the console.

let myName="Sakshi";
console.log(myName);

//Write a JavaScript program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle, then calculate and display the area.
let area=null, length=null, breadth=null;
length=prompt("Enter length of the rectangle: ");
breadth=prompt("Enter breadth of the rectangle: ");

area= length * breadth;
console.log(area);

//Write a JavaScript program that prompts the user to enter their first name and last name separately. Then, concatenate the two names together with a space in between and display the full name

let firstName=prompt("Enter your first Name: ");
let lastName=prompt("Enter your last name: ");

console.log(firstName+ " "+ lastName);

//Write a JavaScript program that prompts the user to enter their age as a string. Convert the string to a number and then check if the user is eligible to vote (i.e., their age is 18 or above). Display an appropriate message based on the result

let age=prompt("Enter your age: ");
age=Number(age);

if (age >= 18)
    console.log("Eligible to vote!");
else
console.log("Not eligible to vote.");

/*Write a JavaScript program that prompts the user to enter 
two numbers. Compare the two numbers and display 
whether the first number is greater than, less than, or 
equal to the second number*/

let a=Number(prompt("Enter first no.: "));
let b=Number(prompt("Enter second no.: "));

if (a==b)
    {
        console.log("numbers are equal");
    }

else if(a>b)
    {
        console.log("First number "+a+" is greater than "+b);
    }
    
    else{
        
        console.log("Second number" +b+" is greater than "+a);
}

/*Write a JavaScript program to simulate a simple counter. 
Initialize a variable counter to 0. Prompt the user to 
choose an operation: increment (++), decrement (--), or 
exit. Based on the user's choice, perform the 
corresponding operation on the counter and display the 
updated value*/

let counter=0;
let choice = null;
console.log("initially counter = "+ counter);
do
{
    choice = Number(prompt("Choose 1.Increment\t 2.Decrement (Enter 0 to stop )\n"));
    if (choice != 0)
    {
if (choice == 1)
    {
        counter++;
    }
    
    else {
        counter--;
    }
    
    console.log(counter);}
} while (choice != 0);