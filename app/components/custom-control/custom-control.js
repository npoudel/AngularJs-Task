angular.module('customControlDirective', [])
.directive('customForm', [function(){
  return {
    scope: {
      label: '@',
      addItem: '&'
    },
    restrict: 'E',       
    templateUrl: 'components/custom-control/custom-control.component.html',
    link: function($scope, element, attr) {      

    }
  };
}])