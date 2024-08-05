//1) an array that takes students names and print total no. of students

function createArray()
{
    let arr = [];
    let n = parseInt(prompt("Enter the no. of elements in the array: "));

    for (let i =0; i<n; i++)
        {
            arr[i] = parseInt(prompt("Enter array element: "));
        }

    console.log(`The total no. of elements in this array is: ${arr.length}`);
    return arr;
}

let array = createArray();

//2) loop to iterate over the array and logging all elements

function printArray(arr)
{
    console.log("Array elements are: ");
    for (let i =0; i<arr.length; i++)
        {
            console.log(`element ${i} = ${arr[i]}`);
        }
}


printArray(array);
//3) storing and printing elements in array using push and pop

let arr= [5, 7, 9];
function pushPop(arr)
{

        //pushing
            let num = parseInt(prompt("Enter the number of elements you want to push: " ));
            for (let i =0; i<num; i++)
                {
                    let val = parseInt(prompt("Enter the element you want to push: "));
                arr.push(val);
                    }
        

        //popping
        console.log("Array elements are: ");
        let num2 = arr.length;
        for (let i =0; i<num2; i++)
            {
           let poppedVal = arr.pop();
            console.log(poppedVal);
            }
}

pushPop(array);
//array is empty now



//4) to count total number of duplicate elements
function duplicateElements(arr)
{
    let num = arr.length;
    for (let i =0; i<num; i++)
        {
            let count = 1;
            for (let j= 0; j<num; j++)
                {
                    
                    if (i != j && arr[i] != null)
                      {
                    if (arr[i] ===arr[j])
                        {
                            // console.log(arr[i], arr[j]);
                            arr[j] = null;
                            count ++;
                        }
                    
                }
                            // console.log(`count for ${arr[i]}= `, count);
                }
                
                if (arr[i] != null)
            console.log(`element ${arr[i]} is repeated ${count} times.`);
        }
}
let array2 = [2,2,2,3,3,4,7,3,2,4,7];
duplicateElements(array2);


//5) to count frequency of each element of an array
function frequencyCounter(arr)
{
    let num = arr.length;
    for (let i =0; i<num; i++)
        {
            let count = 1;
            for (let j= 0; j<num; j++)
                {
                    
                    if (i!=j && arr[i] != null)
                      {
                    if (arr[i] ===arr[j])
                        {
                            // console.log(arr[i], arr[j]);
                            arr[j] = null;
                            count ++;
                        }
                    
                }
                            // console.log(`count for ${arr[i]}= `, count);
                }
                
                if (arr[i] != null)
            console.log(`frequency of element ${arr[i]} is ${count}.`);
        }
}

let array3 = [3,2,3,4,7,5,9,3]
frequencyCounter(array3);


//6) to seperate odd and even integers into separate arrays

let oddArrayG = [];
let evenArrayG= [];  //empty global array declaration
function separateOddEven (arr)
{

    let count1 = 0;
    let count2 = 0;
    for (let i =0; i< arr.length; i++)
        {
            // if ( arr[i] != null)
                {

                    if (arr[i] % 2 === 0)
                    {
                        evenArrayG[count1] = arr[i];
                    count1++;
                }
            else
        {
            oddArrayG[count2] = arr[i];
        count2++;
    }
}

        }
}


separateOddEven(array3);
console.log("Odd number arrays: ", oddArrayG, " and Even number arrays: ", evenArrayG);





