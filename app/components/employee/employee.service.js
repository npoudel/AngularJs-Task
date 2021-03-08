function employeeService() {
    return ['$http', function ($http) {
        let url = "http://localhost:57290/api/employee";
        var getEmployees =  function () {
            return $http.get(url)                 
        }
        var addEmployee = function(body){
            return $http.post(url,body);
        }
        var updateEmployee = function (body){
            return $http.put(url,body);
        }
        return {
            getEmployees: getEmployees,
            addEmployee: addEmployee,
            updateEmployee: updateEmployee
        }
   }]
};