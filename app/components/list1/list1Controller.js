function list1Controller($scope, $location, storeValue, $http, $window, $cookieStore){
    debugger;
    
    // $http.get("http://localhost:8081/articles").then(
    //     function successCallBack(response){
    //         $scope.names = response.data;
    //     },
    //     function errorCallback(response){
    //         console.log("error");
    //     }
    // // );
    // $scope = 
    //     {firstName: "Mikey", lastName: "Archar"};
    //    {firstName: "Rickie", lastName: "Ponting"}
    // $scope.firstName='';
    // $scope.lastName='';
    //$scope.names.firstName = 'me';

    $scope.addItem = function(firstName,lastName) {
        debugger;
        //$scope.names.push({firstName: fullName.firstName, lastName: fullName.lastName});
        storeValue.setValue({firstName: firstName, lastName: lastName}, "myValue" ,$window, $cookieStore);        
        $location.path('/list2');
    }
}