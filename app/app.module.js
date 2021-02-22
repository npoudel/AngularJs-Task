var app = angular.module("mainApp", ["ngRoute","customControlDirective"]);

app.config(function($routeProvider, $httpProvider) {
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
		.otherwise({
			redirectTo: '/list1'
		});
});