(function () {
    'use strict';
    var controllerId = 'contact';
    angular.module('app').controller(controllerId, ['$rootScope','common', contact]);

    function contact($rootScope,common) {
        var vm = this;
        vm.pageheader = "Where else, if not on internet!";
        $rootScope.title = "Contact Details | Flashspark-Abhijit Sinha";

        activate();
        function activate() {
            common.activateController([], controllerId);
        }

    }
})();