// In this file will contain all our config constants
// So in the config constants may be the message of your application which means the api notification
// API_NOTIFICATION_MESSAGES



export const API_NOTIFICATION_MESSAGES = {

    loading : {
        title : "Loading...",
        message : "Data is being loaded, please wait"
    },

    success : {
        title : "Success",
        message : "Data is being loaded, successfully"
    },

    responseFailure : {
        title : "Response Error",
        message : "Some error occured while fething response from the server, please try again later"

        // In this case your request does not go to the server
    },

    requestFailure : {
        title : "Request Failure / Error from backend",
        message : "Some error occured when parsing request data"

        // In this case problem occurs from the backend
    },

    networkError : {
        title : "Connectivity Failure",
        message : "Unable to connect with the server, please check internet connectivity or try again later"

        // In this case connectivity issue or network issues are occured
    }
}


// API service call
// We are looking sample request here, sample request will be with key, with key will be value,
// in value you have to pass url "userSignUp : {url : "/signup", method:"POST/GET/PUT/DELETE", params : true/false, query : true/false }"

export const service_URLS = {
    userSignUp : {
        url : "/signUp",
        method : "POST"
    }
}