function list2Controller($scope, storeValue) {
    // $scope.names = storeValue.getValue("myValue");
    // $scope.firstName = $scope.names.firstName;
    // $scope.lastName = $scope.names.lastName;
    //$scope.option = '';
    //$scope.option = {value:'',name:''};
    $scope.showCompany = false;
    $scope.showPersonal = false;
    $scope.options = [{
        value: "Company",
        name: "dataOptions",
        isSelected: false,
    }, {
        value: "Personal",
        name: "dataOptions",
        isSelected: true
    }];
    $scope.newValue = function(value) {  
        debugger;      
        if(value === "Personal"){
            $scope.showPersonal = true;
            $scope.showCompany = false;
        }
        else{
            $scope.showCompany = true;
            $scope.showPersonal = false;
        }
  };
}