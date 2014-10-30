(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings
        'ngResource',

        // Custom modules 
        'common',           // common functions, logger

        // 3rd Party Modules
        'ngMap'
    ]);
    
    // Handle routing errors and success events
    app.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
        $rootScope.location = $location;
    }]);
})();