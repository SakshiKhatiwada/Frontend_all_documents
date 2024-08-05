//write a program to print the sum of all elements of array.

let Arr = [];
 
// let x= Number(prompt("Enter the no. of elements you want to enter: "));
let x= parseInt(prompt("Enter the no. of elements you want to enter: "));

//parseInt is better option, we discussed a lot the other day
 
for (let i =0; i<x; i++)
    {
        Arr[i] = parseInt(prompt("Enter array element for index " + i + " "));
    }

let sum = 0;
    for (let num of Arr)
        {
            sum += num;
        }

        console.log("The sum of all elements of array is : ", sum);
