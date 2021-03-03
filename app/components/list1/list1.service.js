angular.module('mainApp').factory('storeValue', function() {   
    var valueStored= {};
    return {
        getValue: function(viewId) {
            return valueStored[viewId];
        },
        setValue: function(newValue,viewId,$window, $cookies) {
            debugger;
            $window.localStorage.setItem(viewId, JSON.stringify(newValue));
            $window.sessionStorage.myValue = JSON.stringify(newValue);
            $cookies.put('cookie',newValue);
            valueStored[viewId] = newValue
        }
    };
})