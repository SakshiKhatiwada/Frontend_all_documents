const maxLength =10;
let buttons = document.querySelectorAll(".button:not(.specialButton)");
let equalTo = document.querySelector(".equal");
console.log("buttons" , buttons);

let qn = document.querySelector(".question");
let ans = document.querySelector(".answer")


buttons.forEach(
 function(btn){
   
        btn.addEventListener("click", function()
    {
       qn.textContent += this.textContent;
        console.log(qn.textContent);
    })
    }
)

//after = is clicked
equalTo.addEventListener("click",
    function calculate() {
    let question = qn.textContent;
    //to make js recognize some special symbols
        question = question.replace("sin", "Math.sin"
        )
 question = question.replace("e", "Math.exp"
        )

    let answer= eval(question); //js func to evaluate the expression

    //to reduce overflow
    if (ans.toString().length > maxLength )
        {
            ans.textContent = answer.toExponential(2);
        }
        else
   { ans.textContent = answer;}
}
)

function ac() {
    ans.textContent = "";
    qn.textContent = "";
}

function del()
{
    qn.textContent = qn.textContent.slice(0,qn.textContent.length-1);
    //obtains the expression leaving the last element
    }

    function sin()
    {
        // let value = this.textContent;
        // console.log(value);
        // qn.textContent = qn.textContent + '(';
    }

    function exponent()
    {
        // qn.textContent = qn.textContent + '(';
    }