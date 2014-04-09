(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider,$locationProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
            $locationProvider.html5Mode('true').hashPrefix('!');
        });
        $routeProvider.otherwise({ redirectTo: '/' });
        
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    title: 'home',
                    templateUrl: 'app/home/home.html',
                    settings: {
                        nav: 1,
                        content: '<i class="icon-mybulb fa-2x site-bulb"></i>'
                    }
                }
            },
            {
                url: '/thoughts',
                config: {
                    templateUrl: 'app/thoughts/thoughts.html',
                    title: 'thoughts',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-book"></i> Thoughts'
                    }
                }
            }, {
                url: '/about',
                config: {
                    title: 'faq',
                    templateUrl: 'app/about/about.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-info"></i> About'
                    }
                }
            },
             {
                 url: '/timeline',
                 config: {
                     templateUrl: 'app/timeline/timeline.html',
                     title: 'timeline',
                     settings: {
                         nav: 4,
                         content: '<i class="fa fa-arrows-h"></i> Timeline'
                     }
                 }
             },

              {
                  url: '/:article',
                  config: {
                      templateUrl: 'app/article/article.html',
                      title: 'article',
                  }
              }

        ];
    }
})();