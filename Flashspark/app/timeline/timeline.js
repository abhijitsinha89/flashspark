(function () {
    'use strict';
    var controllerId = 'timeline';
    angular.module('app').controller(controllerId, ['common', timeline]);

    function timeline(common) {
        activate();
        function activate() {
            common.activateController([], controllerId);
        }
    }
})();