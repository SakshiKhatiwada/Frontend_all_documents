let x=3;

switch (x)
{
    case 1: 
    console.log("1");
    break;

    case 2: 
    case 3:
        // case 2||3 : error ho
    console.log("2 or 3");
    break;

    default:
        console.log("Another number");
}