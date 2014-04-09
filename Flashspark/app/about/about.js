(function () {
    'use strict';
    var controllerId = 'about';
    angular.module('app').controller(controllerId, ['common', about]);

    function about(common) {
        activate();
        function activate() {
            common.activateController([], controllerId);
        }

    }
})();