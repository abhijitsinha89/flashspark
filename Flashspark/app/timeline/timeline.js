(function () {
    'use strict';
    var controllerId = 'timeline';
    angular.module('app').controller(controllerId, ['$rootScope', '$filter', '$sce', 'dbdata', 'common', timeline]);

    function timeline($rootScope, $filter, $sce, dbdata, common) {
        var vm = this;
        vm.ShowOverlay = false;
        vm.pageheader = "The linearity of time";
        $rootScope.title = "Yearbook | Flashspark-Abhijit Sinha";
        vm.trustAsHtml = $sce.trustAsHtml;
        activate();

        function activate() {
            common.activateController([], controllerId);
            getAboutme();
        }

        function getAboutme() {
            dbdata.timelineData().then(function(data) {
                vm.timeline = data;
            });

            return vm.timeline;
        };

        vm.Overlay = function (workId) {
            angular.forEach(vm.timeline, function (obj) {
               var found = $filter('filter')(obj.Work, { id: workId }, true);
                  if (found.length) {
                        vm.ShowOverlay = true;
                        vm.workOverlayDisplay = found[0];
                  };


            });
        };
    };

})();