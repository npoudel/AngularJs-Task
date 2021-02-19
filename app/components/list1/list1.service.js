angular.module('mainApp').factory('storeValue', function() {   
    var valueStored= {};
    return {
        getValue: function(viewId) {
            return valueStored[viewId];
        },
        setValue: function(newValue,viewId) {
            valueStored[viewId] = newValue
        }
    };
})