const loginForm = document.querySelector('.login-form');
const userName = document.querySelector('#name');
const password = document.querySelector('#password');


loginForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const userNameValue = userName.value;
    const passwordValue = password.value;

    //In Basic Authentication, username and password are encoded in Base64
    const credentials = btoa(`${userNameValue}:${passwordValue}`);
    //btoa -> binary to ASCII

    //sending request to the backend using fetch
    try{

        const response = await fetch('http://localhost:3000/login',{
            method: 'GET',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json' 
            }
        });
        console.log("seeing");
        if(response.ok){
            alert("login successful! 🥳");
        }
        else
        alert("login failed! ❌");
    }
    catch(err){
        console.log('error occurred!');
        alert('error occurred!');
    }
});