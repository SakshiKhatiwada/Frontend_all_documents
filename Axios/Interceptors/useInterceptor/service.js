//Now we can us the interceptor we created
import axiosInstance from "/Interceptors/script"

async function fetchData(){
    try{
        const res = await axiosInstance('/users/1');
        console.log('user data: ', res.data);
    }
    catch(err){
        console.log('error occurred: ', err.message);
    }
}

//executing this function
fetchData();