//To detect vulgar words from a given strings

const NUM = 3;
let givenWord = ["vulgar", "scam", "curse"];    //sample list of selected words

function checkWord (str)
{
    let check = 0;
    for (let i =0; i<NUM; i++)
        {

            if (str.toLowerCase().includes(givenWord[i]))
            {
                check++;
            }
        }
        return check;
 }

let str = prompt ("Enter the string: ");
let X = checkWord (str);
if (X>=1)
    {
        console.log("Vulgar word Detected!");
    }
else {
    console.log("Word not found");
}

