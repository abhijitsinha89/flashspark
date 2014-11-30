(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['$rootScope', 'common', home]);

    function home($rootScope, common) {
        $rootScope.title = "Flashspark | Abhijit Sinha";
        activate();
        function activate() {
            common.activateController([], controllerId);
        }

        function setheight() {
            
        }

    }
})();