//to generate OTP and regenerate it if it is same with the previous ones
let log = console.log;
let checkingObj= {};


function OTPGenerator(length = 4)//default length of OTP is 4
{
    let otp = '';
    let digits='0123456789';    //all 10 digits

    for (let i=0; i<length; i++){
        otp += digits[Math.floor(Math.random()*10)];
        // log(otp);
    }

    //checking if it is same as previous or not

    if (checkingObj[otp] == undefined)
    {
        checkingObj[otp] = 1;
        log(otp);
        return otp;
    }
    else{
        checkingObj[otp] ++;
        log(`The number of times this OTP ${otp} has been generated: ${checkingObj[otp]}`);
        OTPGenerator();
    }
}

