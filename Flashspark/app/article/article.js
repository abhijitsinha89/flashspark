(function () {
    'use strict';
    var controllerId = 'article';
    angular.module('app').controller(controllerId, ['$rootScope', '$routeParams', '$location', '$http', 'common', article]);

    function article($rootScope, $routeParams, $location, $http, common) {
        var articleTitleParams = $routeParams.article.replace(/-/g, ' ');
        var articletitleUpper = articleTitleParams.substring(0, 1).toUpperCase() + articleTitleParams.substring(1);
        var vm = this;
        vm.articles = [];
        vm.navigatearticle_next = [];
        vm.navigatearticle_previous = [];

        activate();
        vm.contentLoaded = false;
        function activate() {
            common.activateController([], controllerId);
            getArticle();            
        }

        function getArticle() {
            $http.get('/api/Values/GetArticle', { params: { param_articletitle: articletitleUpper } }).success(function (data) {
                vm.articles = data;
                setNavigation(vm.articles[0].Id);
                vm.contentLoaded = true;
                return vm.articles;
            })
                .error(function () {
                    var msg = 'Error' + error.message;
                    logError(msg, error);
                    throw error;
                });
        };

        function setNavigation(articleId) {
            $http.get('/api/Values/GetNavigationArticles', { params: { articleID: articleId } }).success(function (data) {
                if (articleId != 1) {
                    vm.navigatearticle_previous = data[0];
                    vm.navigatearticle_next = data[1];
                }
                else {
                    vm.navigatearticle_next = data[0];
                    vm.navigatearticle_previous = "";
                }
                setNavigationArrow(articleId);
            })
              .error(function () {
                  var msg = 'Error' + error.message;
                  logError(msg, error);
                  throw error;
              });
        };


        function setNavigationArrow(articleIdSetarrow) {
           var articleIdMax = window.name;

           if (articleIdSetarrow == 1) {
                vm.displayforward = true;
                vm.displayback = false;
           } else if (articleIdMax == articleIdSetarrow) {
                vm.displayforward = false;
                vm.displayback = true;
            } else {
                vm.displayforward = true;
                vm.displayback = true;
            }
            };

            vm.back = function (title) {
                var navigatedArticle = title.replace(/\s+/g, '-').toLowerCase();
                $location.url('/'+ navigatedArticle);
            };

            vm.forward = function (title) {
                var navigatedArticle = title.replace(/\s+/g, '-').toLowerCase();
                $location.url('/' + navigatedArticle);
            };
    }
})();