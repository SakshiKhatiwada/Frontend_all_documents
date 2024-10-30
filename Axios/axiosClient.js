// import axios from 'axios'
// import axios from 'https://cdn.jsdelivr.net/npm/axios@latest/dist/axios.min.js';


// creating an instance of axios with custom configurations
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    //other configurations are added here!
})


// to modify or handle responses or errors globally before they reach our specific request
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('no error');
        return response;
    },
    (error)=> {
        if(error.response && error.response.status == 401)
        {
            console.log('redirect here or call the refresh token api');
        }

        else if (error.response && error.response.status == 404)
            {console.log('error 404');}
        // console.log('error in interceptors doc');
        console.log('error: ', error);
        return Promise.reject(error);
    }
)

export default axiosInstance;
