const url ="https://restcountries.com/v3.1/all";


// we have to wrap inside a function for this
async function getUserData()
{
    const response = await fetch(url);

    if (!response.ok){
        console.log("error: ", response?.error);
    }

    const data = await response.json();
    console.log(data);
}