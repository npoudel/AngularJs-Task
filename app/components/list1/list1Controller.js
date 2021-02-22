function list1Controller($scope, $location, storeValue, $http){
    debugger;
    
    $http.get("http://localhost:8081/articles").then(
        function successCallBack(response){
            $scope.names = response.data;
        },
        function errorCallback(response){
            console.log("error");
        }
    );
    // $scope.names = [
    //     {firstName: "Mikey", lastName: "Archar"},
    //     {firstName: "Rickie", lastName: "Ponting"}
    // ];
    $scope.addItem = function(fullName) {
        $scope.names.push({firstName: fullName.firstName, lastName: fullName.lastName});
        storeValue.setValue($scope.names, "myValue");        
        $location.path('/list2');
    }
}