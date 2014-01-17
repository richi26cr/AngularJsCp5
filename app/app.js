/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 17/01/14
 * Time: 09:31 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var personApp = angular.module('personApp',[
    'ngRoute'
]);

personApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/persons', {
                templateUrl: 'app/views/PersonList.html',
                controller: 'PersonListCtrl'
            }).
            when('/persons/:personName', {
                templateUrl: 'app/views/PersonDetail.html',
                controller: 'PersonDetailCtrl'
            }).
            otherwise({
                redirectTo: '/persons'
            });
    }]);