import axios from "axios";
import { API_NOTIFICATION_MESSAGES } from "../constants/config";



const backendAPIURL = "http://localhost:3001";

const axiosInstance = axios.create({
    baseURL : backendAPIURL,
    timeout : 10000,
    headers : {
        "content-type" : "application/json"
    }

    // if my api response get delayed and if our api goes to pending state
    // for that reason we are using "timeout" here
});


axiosInstance.interceptors.request.use(
    function(config) {
        return config;
    },

    function(error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response) {
        // incase if you need a loader, you can use loader here (when you have make api request)
        return processResponse(response);
    },

    function(error) {
        // incase if you need a loader, you can use loader here (when you have make api request)
        return Promise.reject(processError(error));
    }
)

// if success > return { isSuccess : true, data : object }
// if fail > return { isFailure : true, status : string, msg : string, code : "" }

const processResponse = (response) => {
    if (response.status === 200) {
        return { isSuccess : true, data : response.data }
    } else {
        return {
            isFailure : true,
            status : response?.status,
            msg : response?.msg,
            code : response?.code
        }
    }
}

const processError = (error) => {

    if(error.response) {

    // there are three types of error first "response", second "request", third "simple error message"
    // In this you have successfully sent the request but the response from sever is status code
    // other than 200

    } else if (error.request) {
        // In this What happens in case of error, you sent the request properly but no response came
        // for ex. frontend is not connected to the backend, connectivity issue or network
        // issue all these are comes here
    } else {
        
        // In this proper frontend error occurs, by using these method you can easily bebug the code
    }
}








// What is axios?
// Axios is basically an external library, which is used to make promise based htttp calls
// Fetch made easy plus gives us structured responses
// Its one of those recommended libraries, used with reactJs

// why creating instances in axios?
// what if we want to make multiple api calls, to the same endpoint,
// having to adding the full url doesn't seem right, plus what if later on the endpoints is changes
// the changes is just seem to much of manual rework.
// for this we creating instances, by using the "create" method which is part of the above
// inport you did above

// const axiosInstance = axios.create()

// Now first we need to set our endpoint as the base url for the above instance

// const axiosInstance = axios.create({baseURL:"https://jsonplaceholder.typicode.com/"});

// There are more options which can be set for a given axios instance, baseURL and the headers
// are the most common

// Enterprise applications generally have multiple endpoints,
// and its more easier to create multiple instances to create a single source for each endpoint.
// For naming convention, I use endpointName.instatnce.js. This is what I have personally been using,
// since I started using React

// With that the first requirement is done


// Setting Auth token in Header

// So this a little easier than it looks, we will just update our above instance to set
// this token once.

// export const setAuthToken = token => {
//  if (token) {
 //applying token
//  instance.defaults.headers.common['Authorization'] = token;
//  } else {
 //deleting the token from header
//  delete instance.defaults.headers.common['Authorization'];
//  }
// }

// So the moment we get the token, we just call the method and the token is added to the Header

// For every call we make using the instance to the endpoint the auth token will be added.

// But what if we still want to validate it before we make the call, that is where interceptors

// come in.

// So what are interceptors and why we use them?
// Interceptors are the methods thich is trigurred before the main method,
// There are two types of interceptos

// request interceptor : this is called before the actual call to the endpoint is made

// response interceptor : this is called before the promise is completed and the data is received
// by then callback

// Think of the interceptor as the tunnel between the request/response and the actual promise

// axios method called ========> request interceptor =========> call made

// response data ========> request interceptor ==========> response received

// So this is part of the third requirement
// We will be updating the above example and then check the final output.

// instance.interceptors.request.use(req => {
//    if (axios.defaults.headers.common["Authorization"]) return req;
//    throw ({message:"the token is not available"});
//   },error=>{
//    return Promise.reject(error);
//   }
//  );

// Lets add a response interceptor to see how it can be used:

// on successful response

// instance.interceptors.response.use(response=>response,
// error=>{
//  const fallbackValue = [
//    {userId: "Not authorized",id: "aerw15311sq",
//     title: "Please try     again",completed: false}];
//   return Promise.reject(fallbackValue);}
// );

// Interceptors can be very helpful, if used properly as
// it allows us to make checks and even changes even before the main method is executed.