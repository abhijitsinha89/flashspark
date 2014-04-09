(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['common', home]);

    function home(common) {
        activate();
        function activate() {
            common.activateController([], controllerId);
        }

    }
})();