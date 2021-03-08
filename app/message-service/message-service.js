function messageService() {
    return [function () {
        var getMessage =  function (status) {
            switch (status){
                case 400:
                    return "Bad request. The server could not understand the request."
                case 401:
                    return "Client is not authenticated."
                case 403:
                    return "You don't have access to the content."
                case 404:
                    return "Resource not found"
                case 408:
                    return "Request timeout."
                case 500:
                    return "Internal server error."
                default:
                    return "Network error."
            }                 
        }
        return {
            getMessage: getMessage
        }
   }]
};