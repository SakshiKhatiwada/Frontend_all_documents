import axios from 'axios'


// creating an instance of axios with custom configurations
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    //other configurations are added here!
})


// to modify or handle responses or errors globally before they reach our specific request
axiosInstance.interceptors.response.use(
    (response) => response,
    (error)=> {
        if(error.response && error.response.status == 401)
        {
            console.log('redirect here or call the refresh token api');
        }
        console.log('error in interceptors doc');
        return Promise.reject(error);
    }
)

export default axiosInstance;
