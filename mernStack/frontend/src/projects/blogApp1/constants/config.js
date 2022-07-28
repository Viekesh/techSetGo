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
        title : "Request Failure",
        message : "Some error occured when parsing request data"

        // In this case problem occurs from the backend
    },

    networkError : {
        title : "Connectivity Failure",
        message : "Unable to connect with the server, please check internet connectivity or try again later"

        // In this case connectivity issue or network issues are occured
    }
}