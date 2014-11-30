(function () {
    'use strict';
    var controllerId = 'article';
    angular.module('app').controller(controllerId, ['$rootScope', '$routeParams', '$location', '$http', '$sce', 'common', article]);

    function article($rootScope, $routeParams, $location, $http,$sce, common) {
        var articleTitleParams = $routeParams.article.replace(/-/g, ' '),
            articletitleUpper = articleTitleParams.substring(0, 1).toUpperCase() + articleTitleParams.substring(1),
            vm = this;
        vm.articles = [];
        vm.navigatearticle_next = [];
        vm.navigatearticle_previous = [];
        vm.pageheader = articletitleUpper;
        $rootScope.title = articletitleUpper + " | Flashspark-Abhijit Sinha";
        vm.url = $routeParams.article;

        activate();
        vm.contentLoaded = false;
        function activate() {
            common.activateController([], controllerId);
            getArticle();            
        }

        function getArticle() {
            $http.get('/api/Values/GetArticle', { params: { paramArticletitle: articletitleUpper } }).success(function (data) {
                vm.articles = data;
                vm.body = $sce.trustAsHtml(data[0].Body);
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
            $http.get('/api/Values/GetAllArticleCount', { cache: true }).success(function (data) {

           if (articleIdSetarrow === 1 && data === 1) {
                vm.displayforward = false;
                vm.displayback = false;
           }
           else if (articleIdSetarrow === 1 && data > 1) {
               vm.displayforward = true;
               vm.displayback = false;
           }
           else if (data === articleIdSetarrow) {
                vm.displayforward = false;
                vm.displayback = true;
            } else {
                vm.displayforward = true;
                vm.displayback = true;
           }
            });
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