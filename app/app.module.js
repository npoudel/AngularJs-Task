var app = angular.module("mainApp", ["ngRoute","customControlDirective","ngCookies",'ui.bootstrap','ngAnimate']);

app.config(function($routeProvider, $httpProvider) {
	debugger;
	$httpProvider.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
	$routeProvider
		.when('/list1', {
			templateUrl: 'components/list1/list1.component.html',
			controller: 'list1Controller'
		})
        .when('/list2', {
            templateUrl:'components/list2/list2.component.html',
            controller: 'list2Controller'
        })
		.when('/employment', {
            templateUrl:'components/employment-status/employment-status.component.html',
            controller: 'employmentStatusController2'
        })
		.when('/employee',{
			templateUrl: 'components/employee/employee.component.html',
			controller: 'employeeController'
		})			
		.otherwise({
			redirectTo: '/employment'
		});
		//$locationProvider.html5Mode(true);
});