angular.module('mainApp')
    .factory('employeeService', employeeService())
    .factory('messageService', messageService())
    .controller('employeeController', ['$scope', '$window', '$uibModal', 'employeeService', 'messageService', function ($scope, $window, $modal, myService, messageService) {
        $scope.showModal = false;
        $scope.employees = [];
        myService.getEmployees().then(
            function successCallBack(response) {
                $scope.employees = response.data;
            },
            function errorCallback(response) {
                toastr.error("Error fetching records!!");
            }
        );
        $scope.animationsEnabled = true;
        $scope.editEmployee = function (index) {
            let employee = $scope.employees[index];
            $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'components/employee/employee-modal/employee-modal.component.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    employee: function () {
                        return employee;
                    }
                }
            }).result.then(function (data) {
                myService.updateEmployee(data).then(
                    function successCallBack(response) {
                        employee = response.data;
                        toastr.success("Record updated successfully!!");
                    },
                    function errorCallback(response) {
                        toastr.error("Error updating record!!");
                    }
                );
            });
        }
        $scope.deleteEmployee = function (id) {
            
        }
        
        $scope.addEditModel = function () {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'components/employee/employee-modal/employee-modal.component.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    employee: function () {
                        return null;
                    }
                }
            }).result.then(function (data) {
                debugger;
                myService.addEmployee(data).then(
                    function successCallBack(response) {
                        $scope.employees.push(response.data);
                        toastr.success("Record added successfully!!");
                    },
                    function errorCallback(response) {
                        toastr.error("Error adding record!!");
                    }
                );
            });
        };
    }])