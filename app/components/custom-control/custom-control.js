angular.module('customControlDirective', [])
.directive('customForm', [function($scope){
  debugger;
  
  return {
    scope: {
      label: '@',
      addItem: '&',
      firstName:'=?',
      lastName:'=?'
    },
    restrict: 'E',       
    templateUrl: 'components/custom-control/custom-control.component.html',
    link: function($scope, element, attr) {      

    }
  };
}])