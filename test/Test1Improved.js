//Write a JavaScript program to calculate the area of different geometric shapes such as rectangle, circle, and square. The program should accept the shape name and necessary parameters as arguments. It should use a function with a switch statement to determine the shape and calculate the area based on the provided parameters.
let a,b;
function Area (shape)
{
    switch (shape)
    {
        case "circle":
           a= prompt("Enter radius: ");
            console.log("Area: "+ (3.14*a*a));
            break;

        case "rectangle":
            a=prompt("Enter length: ");
            b=prompt("Enter breadth: ");
            console.log("Area: " + (a*b));
            break;

        case "square":
            a=prompt("Enter length: ");
            console.log('Area: ' + (a ** 2));
            break;

        default: 
        console.log("Wrong shape metioned.");
    }
}

let shape = prompt("Enter the shape you want to find area of (Circle, Rectangle or Square): ");

Area(shape.toLowerCase());