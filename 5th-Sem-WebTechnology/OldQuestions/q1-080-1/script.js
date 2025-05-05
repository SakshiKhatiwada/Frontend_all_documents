const username = document.querySelector("#username");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const country = document.querySelector("#country");
const genderRadios = document.querySelectorAll("input[name='gender']");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  const countryVal = country.value;
  let genderSelected = false;

  if (usernameVal.length < 4) {
    alert("username should be greater than 4");
    return;
  }

  if (passwordVal == "") {
    alert("Password is required!");
    return;
  }

  if (passwordVal.value != "" && !passwordVal.match("[A-Za-z].*#")) {
    alert("Password MUST start with character and end with #");
    return;
  }

  if (countryVal == "") {
    alert("Country Name is required!");
    return;
  }

  genderRadios.forEach((radioInput) => {
    if (radioInput.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    alert("Gender not selected!");
    return;
  }

  //all good
//   form.submit();
  alert("form submitted successfully");
  username.value = ""
  password.value = ""
  country.value=""
  genderRadios.forEach(radioInput=>{
    radioInput.checked = false
  })
});
