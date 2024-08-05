//to extract money from given string and multiplying by 2

function extractAmount(str)
{
    const result = str.match (/[\d.]+/g);
    // return result;
    // console.log(result);
    // console.log(result.join(''));
    return result? result.join(''):'';
}



let extractedAmount = extractAmount("Rs ");
console.log("Extracted amount * 2 = ",extractedAmount,' * 2 = ', (extractedAmount*2) );