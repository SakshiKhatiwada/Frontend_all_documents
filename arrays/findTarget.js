//To find indices of two numbers that sum up to target
//Assumptions: each input would have exactly one soln, can't use same element twice

let flag = 0, A=[],N, target= null;
N = parseInt(prompt("Enter the number of elements: "));

//Taking input
for (let i = 0; i<N; i++)
{
 A[i] = parseInt(prompt("Enter array element: "));
}

//Taking target element
target = parseInt(prompt("Enter the target element to check if two numbers add up to it: "));

//checking
outerLoop:
for (let i=0; i<N-1; i++){
    for (let j=i+1; j<N; j++){
        if (A[i]+A[j]===target){
            flag =1;
            console.log(`[${i},${j}]`);
            break outerLoop;
        }
    }
}

if (flag === 0) {
    console.log(`Required target element ${target} can't be achieved!`);
}