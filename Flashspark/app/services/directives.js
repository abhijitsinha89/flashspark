(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('setcleanurl', ['config', function (config) {
            return {
                restrict: 'A',
                require: 'ngModel',
                replace: true,
                scope: { props: '=parseUrl', ngModel: '=ngModel',text: '@text', flag:'@flag' },
                link: function compile(scope, element, attrs, controller) {
                    scope.$watch('ngModel', function (value) {
                        var lower = value.replace(/\s+/g, '-').toLowerCase();
                        if(scope.flag == 1)
                            var final = lower.replace(lower, '<a href= /#!/' + lower + '>' + scope.text + '</a>');
                        else
                            var final = lower.replace(lower, '<a href= /#!/' + lower + '> <i class="fa fa-arrow-circle-o-right pull-right"></i>' + scope.text + '</a>');
                        element.html(final);
                    });
                }
            };
    }]);
    app.directive('dirDisqus', function ($window) {
        return {
            restrict: 'E',
            scope: {
                disqus_shortname: '@disqusShortname',
                disqus_identifier: '@disqusIdentifier',
                disqus_title: '@disqusTitle',
                disqus_url: '@disqusUrl',
                disqus_category_id: '@disqusCategoryId',
                disqus_disable_mobile: '@disqusDisableMobile',
                readyToBind: "@"
            },
            template: '<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>',
            link: function (scope) {

                scope.$watch("readyToBind", function (isReady) {

                    // If the directive has been called without the 'ready-to-bind' attribute, we
                    // set the default to "true" so that Disqus will be loaded straight away.
                    if (!angular.isDefined(isReady)) {
                        isReady = "true";
                    }
                    if (scope.$eval(isReady)) {
                        // put the config variables into separate global vars so that the Disqus script can see them
                        $window.disqus_shortname = scope.disqus_shortname;
                        $window.disqus_identifier = scope.disqus_identifier;
                        $window.disqus_title = scope.disqus_title;
                        $window.disqus_url = scope.disqus_url;
                        $window.disqus_category_id = scope.disqus_category_id;
                        $window.disqus_disable_mobile = scope.disqus_disable_mobile;

                        // get the remote Disqus script and insert it into the DOM
                        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                        dsq.src = '//' + scope.disqus_shortname + '.disqus.com/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                    }
                });
            }
        };
    });
})();