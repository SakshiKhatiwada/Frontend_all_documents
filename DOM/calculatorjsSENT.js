let buttons = document.querySelectorAll("input[type='button']:not(.special)");
let qn = document.querySelector("#qn");
let ans = document.querySelector("#ans");

// console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.value);
    qn.value += this.value;
  });
});

function calculate() {
    let question = qn.value
    console.log(question);
    question = question.replace("^", "**");
    question = question.replace("√", "Math.sqrt");
    console.log(question);
    let answer = eval(question);
  ans.value = answer;
}

function ac() {
  ans.value = "";
  qn.value = "";
}

function del() {
  let str = qn.value;
  let remaining = str.slice(0, str.length - 1);
  qn.value = remaining;
}
