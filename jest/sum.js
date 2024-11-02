// function sum(a, b) {
//     return (a+b);
// }

// module.exports = sum;

function myFunc(input)
{
    if (typeof input !== 'number')   //input is invalid
    {
        throw new Error('Invalid Input');
    }
}
module.exports = myFunc;