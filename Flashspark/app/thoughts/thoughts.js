(function () {
    'use strict';
    var controllerId = 'thoughts';
    angular.module('app').controller(controllerId, ['$rootScope','common','dbdata', thoughts]);

    function thoughts($rootScope, common, dbdata) {
        var vm = this;
        vm.articles = [];
        vm.more_articles = [];
        vm.display_more_articles = "false";
        vm.setspinner1 = true;
        vm.setspinner2 = true;
        vm.display_button = "false";
        vm.pageheader = "A pinch of salt and some nimbu paani";
        $rootScope.title = "Journal | Flashspark-Abhijit Sinha";
        activate();

        function activate() {
            common.activateController([], controllerId);
            getArticles();
        }

        function getArticles() {
            vm.setspinner1 = false;
            dbdata.getData('GetTopArticles').then(function (data) {
                vm.test = data.length;
                vm.articles = data;
                if (data.length < 1) {
                    vm.display_button = "false";
                    alert('false');
                } else {
                    vm.display_button = "true";
                    alert(vm.display_button);
                }
                vm.setspinner1 = true;
                    return vm.articles;
             });
        };

        vm.getMoreArticles = function () {
            dbdata.getData('GetRestoftheArticles').then(function (data) {
                vm.more_articles = data;
                vm.display_button = false;
                vm.display_more_articles = true;
                
                return vm.more_articles;

            });
        };
    }
})();