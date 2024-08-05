//Write a JavaScript program to calculate the area of different geometric shapes such as rectangle, circle, and square. The program should accept the shape name and necessary parameters as arguments. It should use a function with a switch statement to determine the shape and calculate the area based on the provided parameters.
//SAKSHI



function areaRectangle (shape, a, b)
{
    console.log("The shape is a " + shape);
    console.log( "Area: " +(a*b));
}

function areaCircle (shape, r)
{
    console.log("The shape is a" + shape);
    console.log( "Area: " +(3.1415*r*r));
}

function areaSquare (shape, l)
{
    console.log("The shape is a " + shape);
    console.log("Area: " + (l*l));
}


let shape = Number(prompt("Determine the shape (choose: 1 - Circle | 2-Rectangle | 3- Square): "));
let a,b,l,r;
switch (shape){
    case 1: 
        r= prompt("Enter the radius of the circle: ");
        areaCircle ("Circle", r);
        break;

    case 2: 
        a=prompt("Enter the length: ");
        b=prompt("Enter the breadth: ");
    areaRectangle("Rectangle", a, b);
    break;

    case 3:
        l=prompt("Enter the length: ");
        areaSquare("Square", l);
        break;
    default: 
    console.log("Wrong Option!");
}