function list1Controller($scope, $location, storeValue){
    $scope.names = [
        {firstName: "Mikey", lastName: "Archar"},
        {firstName: "Rickie", lastName: "Ponting"}
    ];
    $scope.addItem = function() {
        $scope.names.push({firstName: $scope.names.firstName, lastName: $scope.names.lastName});
        storeValue.setValue($scope.names, "myValue");        
        $location.path('/list2');
    }
}