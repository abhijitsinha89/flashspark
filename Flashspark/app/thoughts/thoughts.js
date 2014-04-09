(function () {
    'use strict';
    var controllerId = 'thoughts';
    angular.module('app').controller(controllerId, ['$rootScope', '$http','common', thoughts]);

    function thoughts($rootScope, $http, common) {
        var vm = this;
        vm.articles = [];
        vm.more_articles = [];
        vm.title_link = [];
        vm.display_more_articles = "false";
        activate();

        function activate() {
            common.activateController([], controllerId);
            getArticles();
        }

        function getArticles() {
            $http.get('/api/Values/GetTopArticles').success(function (data) {
                vm.articles = data;
                window.name = data[0].Id;
                if (data[0].Id < 6) {
                    vm.display_button = "false";
                } else {
                    vm.display_button = "true";
                }
                    angular.forEach(vm.articles.title, function(title) {
                        title.replace(/\s+/g, '-').toLowerCase();
                        vm.title_link.push(title);      
                    });

                return vm.articles;
            })
                .error(function () {
                    var msg = 'Error' + error.message;
                    throw error;
                });
        };

        vm.getMoreArticles = function () {
            $http.get('/api/Values/GetRestoftheArticles').success(function (data) {
                vm.more_articles = data;
                angular.forEach(vm.articles.title, function(title) {
                    title.replace(/\s+/g, '-').toLowerCase();
                    vm.title_link.push(title);
                });
                vm.display_button = "false";
                vm.display_more_articles = "true";

                return vm.more_articles;
               
            })
               .error(function () {
                   var msg = 'Error' + error.message;
                   throw error;
               });
        };
    }
})();