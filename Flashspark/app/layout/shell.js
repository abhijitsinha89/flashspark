(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
        ['$rootScope','$timeout', shell]);

    function shell($rootScope) {
        var vm = this;
    };
})();