/**
 * Created with JetBrains WebStorm.
 * User: Richard
 * Date: 14/01/14
 * Time: 03:36 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

personApp.controller('PersonDetailCtrl',['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('persons/'+ $routeParams.personName +'.json').success(function(data) {
            $scope.person = data;
        });

        $scope.setImage = function(imageUrl) {
            $scope.imageClicked = imageUrl;
        };

        $scope.increment = function(val) {
            $scope.val = val+1;
        }
    }
]);