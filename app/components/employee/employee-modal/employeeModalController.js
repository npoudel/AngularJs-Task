angular.module('mainApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, employee) {
    if(employee){
    employee.dob = employee.dob ? new Date(employee.dob) : null;
    }
    $scope.employee = employee;    
    $scope.ok = function (employee) {
        employee.dob = employee.dob ? employee.dob.toLocaleString().substring(9,0):null;
        $modalInstance.close(employee);
    };
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});