function employmentStatusController($scope, $location, storeValue, $http, $window, $cookieStore){
    $scope.showEmployee = false;
    $scope.notFound = false;
    $scope.status = [
        "Unemployed","Retired","Employed Privately"
    ]
    $scope.checkStatus = function (firstName, lastName, dob) {
        $scope.showEmploymentStatus = false;
        $scope.showEmployee = false;
        $scope.notFound = false;
        $scope.showColumn = false;
        $http.get(
            "https://localhost:44387/api/values", 
            {
            params: {firstName: firstName, lastName:lastName, dob:dob}
         })
         .then(
            function successCallBack(response) {
                $scope.name = response.data;
                if(response.data && response.data.isEmploymentStatusEnabled){
                    $scope.showEmploymentStatus = true;
                }
                else if(response.data && !response.data.isEmploymentStatusEnabled){
                    $scope.showEmployee = true;                    
                }
                else{
                    $scope.notFound = true;
                }
               
            },
            function errorCallback(response) {
                console.log("error");
            }
        );
    }
    $scope.addEmploymentStatus = function(status){
        $scope.showEmployee = true;
        $scope.showColumn = true;
        $scope.name.employmentStatus = status;
    }
}