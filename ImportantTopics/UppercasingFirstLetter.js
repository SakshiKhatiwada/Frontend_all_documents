//when only one word is given
function firstCap (str)
{
    let new_str = str[0].toUpperCase() + str.slice(1);
    return (new_str);
}
    
//when entire sentence is given
function titleCase(str)
{
    let i = 0;
    str= firstCap(str);
    let length = str.length;
    do {
        if (str[i] == ' ')
            {
                str = str.slice(0,i+1) + str[i+1].toUpperCase() + str.slice(i+2);
            }
            i++;
    } while (i<=length);
return str;
}


let str = "sakshi khatiwada is me";
str = titleCase(str);
console.log(str);