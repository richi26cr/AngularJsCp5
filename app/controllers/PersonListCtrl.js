/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 17/01/14
 * Time: 09:26 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonListCtrl',['$scope','$http',
    function($scope, $http) {
        $http.get('persons/persons.json').success(function(data) {
            $scope.persons = data;
        });

        $scope.orderProp = 'age';
    }
]);