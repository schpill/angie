    'use strict';
    var thinApp = angular.module('thinApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]);

    thinApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
