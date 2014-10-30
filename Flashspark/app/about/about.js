(function () {
    'use strict';
    var controllerId = 'about';
    angular.module('app').controller(controllerId, ['$rootScope','$sce','dbdata','common', about]);

    function about($rootScope, $sce, dbdata, common) {
        var vm = this;
        vm.pageheader = "Narcissism Central";
        $rootScope.title = "About me | Flashspark-Abhijit Sinha";
        vm.trustAsHtml = $sce.trustAsHtml;
        activate();
        function activate() {
            common.activateController([], controllerId);
            getFaq();
        }

        function getFaq() {
            dbdata.faqData().then(function(data) {
            vm.faq = data;
            return vm.faq;
            });
        };

    }
})();