angular.module('mainApp')
.factory('service1', service1())
.factory('messageService', messageService())
.controller('employmentStatusController2', [ '$scope','service1', 'messageService', function($scope, myService, messageService) {
    $scope.showEmployee = false;
    $scope.notFound = false;
    $scope.status = [
        "Unemployed","Retired","Employed Privately"
    ]
  $scope.checkStatus = function (firstName,lastName,dob) {
      dob = dob.toLocaleString().substring(10,0);
      $scope.showEmploymentStatus = false;
        $scope.showEmployee = false;
        $scope.notFound = false;
        $scope.showColumn = false;
     myService.getResult(firstName,lastName,dob)
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
            var error = messageService.getMessage(response.status);
            toastr.error(error);
        }
    );
  }
  $scope.addEmploymentStatus = function(status){
    $scope.showEmployee = true;
    $scope.showColumn = true;
    $scope.name.employmentStatus = status;
}
}]);