function list2Controller($scope ,storeValue){
    debugger;
    $scope.names =  storeValue.getValue("myValue"); 
    $scope.firstName = $scope.names.firstName;
    $scope.lastName = $scope.names.lastName;
}