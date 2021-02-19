var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/list1', {
			templateUrl: 'components/list1/list1.component.html',
			controller: 'list1Controller'
		})
        .when('/list2', {
            templateUrl:'components/list1/list1.component.html',
            controller: 'list2Controller'
        })		
		.otherwise({
			redirectTo: '/list1'
		});
});