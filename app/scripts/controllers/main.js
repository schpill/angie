'use strict';

/**
 * @ngdoc function
 * @name thinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thinApp
 */
angular.module('thinApp').controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'Papa',
        'AngularJS',
        'Karma'
    ];

    $scope.pageTitle = 'Bienvenue';
});
