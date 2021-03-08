function service1() {
    return ['$http', function ($http) {
        var getResult =  function (firstName, lastName, dob) {
            return $http.get(
                "https://localhost:44387/api/values", 
                {
                params: {firstName: firstName, lastName:lastName, dob:dob}
             })                 
        }
        return {
            getResult: getResult
        }
   }]
};